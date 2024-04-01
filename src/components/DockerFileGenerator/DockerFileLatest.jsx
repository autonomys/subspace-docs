import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock'

import styles from './DockerFileGenerator.module.css';

// This component is a Docker Compose File Generator for Subspace Docs.
function DockerFileGeneratorLatest() {
    // Initial state for form data
    const [formData, setFormData] = useState({
        nodePort: '30333',
        nodeDsnPort: '30433',
        farmerPort: '30533',
        nodeName: 'subspace',
        snapshot: '',
        nodeData: '',
        farmerData: '',
        rewardAddress: 'st6GBwATPqtBkK5y4uXbV52euszPpFPw7wmkF8FywEqJaf8uP',
        plotSize: '100G',
	    arch: 'x86_64',
    });

    // Predefine the actual network
    const network = 'gemini-3h';
    
    // State for the generated output (docker compose content)
    const [output, setOutput] = useState('');

    // List of available snapshots from GitHub releases
    const [snapshots, setSnapshots] = useState([]);

    // Error messages state for validation purposes
    const [errors, setErrors] = useState({});

    const [glowingLabels, setGlowingLabels] = useState([]);

    const startLabelGlow = (name) => {
        if (!glowingLabels.includes(name)) {
            setGlowingLabels([...glowingLabels, name]);
        }
    };

    const endLabelGlow = (name) => {
        setGlowingLabels(glowingLabels.filter(label => label !== name));
    };
    
    // Fetch Subspace releases on component mount and update the snapshot options
    useEffect(() => {
	let isMounted = true;

	// Fetch latest releases from the Subspace GitHub repository
        fetch('https://api.github.com/repos/subspace/subspace/releases')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch GitHub releases');
                }
                return res.json();
            })
            .then(data => {
		if (isMounted) {
		    // Filter out valid snapshot tags based on naming convention
                    const validSnapshots = data.map(release => release.tag_name).filter(tag => RegExp(`^${network}.*$`).test(tag));

		    // Set the default snapshot and the list of snapshots
                    setFormData(prevData => ({ ...prevData, snapshot: validSnapshots[0] }));
                    setSnapshots(validSnapshots);
		}
            })
	    .then(() => {
		if (isMounted) {
		    // Generate the initial output based on default data
		    generateOutput({ skipRewardAddressCheck: true });
		}
	    })
            .catch(err => {
		// Handle fetch errors
                setErrors({ fetchError: err.message });
            });
	
	return () => {
            isMounted = false;
	};
    }, []);


    // Generates the Docker Compose file content based on formData
    const generateOutput = ({ skipRewardAddressCheck = false } = {}) => {
        const validationErrors = validateInputs();

	if (!skipRewardAddressCheck && formData.rewardAddress === 'st6GBwATPqtBkK5y4uXbV52euszPpFPw7wmkF8FywEqJaf8uP') {
            setErrors({
		...validationErrors,
		rewardAddress: 'Please enter your reward address'
            });
            return;
	}

	// Only generate the output if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            const template = `\
version: "3.7"
services:
  node:
    image: ghcr.io/subspace/node:${formData.snapshot}${formData.arch === "aarch64" ? "-aarch64" : ""}
    volumes:
      - ${formData.nodeData ? formData.nodeData : "node-data"}:/var/subspace:rw
    ports:
      - "0.0.0.0:${formData.nodePort}:30333/udp"
      - "0.0.0.0:${formData.nodePort}:30333/tcp"
      - "0.0.0.0:${formData.nodeDsnPort}:30433/udp"
      - "0.0.0.0:${formData.nodeDsnPort}:30433/tcp"
    restart: unless-stopped
    command:
      [
        "run",
        "--chain", "${network}",
        "--base-path", "/var/subspace",
        "--listen-on", "/ip4/0.0.0.0/tcp/30333",
        "--dsn-listen-on", "/ip4/0.0.0.0/udp/30433/quic-v1",
        "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
        "--rpc-cors", "all",
        "--rpc-methods", "unsafe",
        "--rpc-listen-on", "0.0.0.0:9944",
        "--farmer",
        "--name", "${formData.nodeName}"
      ]
    healthcheck:
      timeout: 5s
      interval: 30s
      retries: 60

  farmer:
    depends_on:
      node:
        condition: service_healthy
    image: ghcr.io/subspace/farmer:${formData.snapshot}${formData.arch === "aarch64" ? "-aarch64" : ""}
    volumes:
      - ${formData.farmerData ? formData.farmerData : "farmer-data"}:/var/subspace:rw
    ports:
      - "0.0.0.0:${formData.farmerPort}:30533/tcp"
    restart: unless-stopped
    command:
      [
        "farm",
        "--node-rpc-url", "ws://node:9944",
        "--listen-on", "/ip4/0.0.0.0/tcp/30533",
        "--reward-address", "${formData.rewardAddress}",
        "path=/var/subspace,size=${formData.plotSize}"
      ]
${formData.nodeData && formData.farmerData ? "" : "volumes:"}${formData.nodeData ? "" : "\n  node-data:"}${formData.farmerData ? "" : "\n  farmer-data:"}\
            `;
            setOutput(template);
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    // Validates the formData to ensure user input is correct and returns any error messages
    const validateInputs = () => {
        const errors = {};

        if (!/^(102[4-9]|10[3-9]\d{1,2}|[2-9]\d{2,3}|[1-5]\d{4,4}|6[0-4]\d{3,3}|65[0-4]\d{2,2}|655[0-2]\d|6553[0-5])$/.test(formData.nodePort)) {
            errors.nodePort = 'Invalid Node Port';
        }
        if (!/^(102[4-9]|10[3-9]\d{1,2}|[2-9]\d{2,3}|[1-5]\d{4,4}|6[0-4]\d{3,3}|65[0-4]\d{2,2]|655[0-2]\d|6553[0-5])$/.test(formData.nodeDsnPort)) {
            errors.nodeDsnPort = 'Invalid Node DSN Port';
        }
        if (!/^(102[4-9]|10[3-9]\d{1,2}|[2-9]\d{2,3}|[1-5]\d{4,4}|6[0-4]\d{3,3]|65[0-4]\d{2,2]|655[0-2]\d|6553[0-5])$/.test(formData.farmerPort)) {
            errors.farmerPort = 'Invalid Farmer Port';
        }
        if (!/^[a-zA-Z0-9_/-]+$/.test(formData.nodeName)) {
            errors.nodeName = 'Invalid Node Name';
        }
        if (!/^\d+(G|T)?$/.test(formData.plotSize)) {
            errors.plotSize = 'Invalid Plot Size';
        }
        if (!/^st[a-zA-Z0-9]{47}$/.test(formData.rewardAddress)) {
            errors.rewardAddress = 'Invalid Reward Address';
        }
	if (!/^(\/([^/]*\/?)*)?$/.test(formData.nodeData)) {
	    errors.nodeData = 'Invalid Node Data';
        }
        if (!/^(\/([^/]*\/?)*)?$/.test(formData.farmerData)) {
	    errors.farmerData = 'Invalid Farmer Data';
        }

        return errors;
    };

    
    // Handles the "Enter" key press when any input or select field is focused, triggering the generation
    const handleKeyDown = (event) => {
        // Check if the pressed key is "Enter" and if any form element is focused
        if (event.key === 'Enter' && (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'select') ) {
            generateOutput();
        }
    };

    // Handle changes in form input fields and update formData state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className={`container ${styles['compose-generator-form__container']} margin-vert--lg`} onKeyDown={handleKeyDown}>
            <h2 className={`text--center margin-bottom--m`}>Docker Compose File Generator</h2>
            <div className={`card ${styles['compose-generator-form__card']}`} >
                <div className="card__body">
                    <div className={styles['compose-generator-form__grid']}>
                        {[
                            { label: 'Node Port', name: 'nodePort' },
                            { label: 'Node DSN Port', name: 'nodeDsnPort' },
                            { label: 'Farmer Port', name: 'farmerPort' },
                            { label: 'Node Name', name: 'nodeName' },
                            { label: 'Plot Size', name: 'plotSize' },
                            { label: 'Reward Address', name: 'rewardAddress' },
                            { label: 'Node Data (Optional)', name: 'nodeData' },
                            { label: 'Farmer Data (Optional)', name: 'farmerData' }
                        ].map(({ label, name }, index) => (
                            <div key={name} className={styles['compose-generator-form__group']}>
                                <label
				    htmlFor={name}
				    className={`text--bold ${styles['compose-generator-form__label']} ${glowingLabels.includes(name) ? styles['compose-generator-form__label--glow'] : ""}`}
				    onMouseEnter={() => startLabelGlow(name)}
				    onAnimationEnd={() => endLabelGlow(name)}
				>
				    {label}:
				</label>
                                <input
                                    className={styles['compose-generator-form__input']}
                                    name={name}
                                    placeholder={label}
                                    onChange={handleChange}
                                    value={formData[name]}
                                />
                                {errors[name] && <p className={styles['compose-generator-form__text--error']}>{errors[name]}</p>}
                            </div>
                        ))}
			<div key="snapshot" className={styles['compose-generator-form__group']}>
                            <label
				htmlFor="snapshot"
				className={`text--bold ${styles['compose-generator-form__label']} ${glowingLabels.includes('snapshot') ? styles['compose-generator-form__label--glow'] : ""}`}
				onMouseEnter={() => startLabelGlow('snapshot')}
				onAnimationEnd={() => endLabelGlow('snapshot')}
			    >
				Snapshot:
			    </label>
                            <select
				className={styles['compose-generator-form__input']}
				name="snapshot"
				value={formData.snapshot}
				onChange={handleChange}
                            >
				{snapshots.map(snap => <option key={snap} value={snap}>{snap}</option>)}
                            </select>
			</div>
			<div key="arch" className={styles['compose-generator-form__group']}>
                            <label
				htmlFor="arch"
				className={`text--bold ${styles['compose-generator-form__label']} ${glowingLabels.includes('arch') ? styles['compose-generator-form__label--glow'] : ""}`}
				onMouseEnter={() => startLabelGlow('arch')}
				onAnimationEnd={() => endLabelGlow('arch')}
			    >
				Architecture:
			    </label>
                            <select
				className={styles['compose-generator-form__input']}
				name="arch"
				value={formData.arch}
				onChange={handleChange}
                            >
				<option value="x86_64">x86_64 (skylake+)</option>
				<option value="aarch64">aarch64</option>
                            </select>
			</div>
                    </div>

                    <div className={`${styles['compose-generator-form__group']} text--center`}>
                        <button className={`button button--primary button--lg ${styles['compose-generator-form__button--primary']}`} onClick={generateOutput}>Generate</button>
                    </div>
                </div>
            </div>
            <div className="margin-top--lg container">
                <CodeBlock language="yaml" title="docker-compose.yaml">{output}</CodeBlock>
            </div>
        </div>
    );
}

export default DockerFileGeneratorLatest;