import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock'

import styles from './SystemdServiceFileGenerator.module.css';


// This component is a Systemd Service File Generator for Subspace Docs.
function AdvancedSystemdServiceFileGenerator() {
    // Initial state for form data
    const [formData, setFormData] = useState({
        nodeBinPath: '/home/subspace/.local/bin/subspace-node',
        farmerBinPath: '/home/subspace/.local/bin/subspace-farmer',
        nodeData: '/home/subspace/.local/share/subspace-node',
        farmerData: '/home/subspace/.local/share/subspace-farmer',
        nodeName: 'subspace',
        nodePort: '30333',
        nodeDsnPort: '30433',
        farmerPort: '30533',
        rewardAddress: 'st6GBwATPqtBkK5y4uXbV52euszPpFPw7wmkF8FywEqJaf8uP',
        plotSize: '100G',
        archival: "off",
        sandbox: "off",
        user: 'subspace',
        extraNodeArgs: '',
        extraFarmerArgs: '',
    });

    // Predefine the actual chain
    const chain = 'gemini-3g';
    
    // State for the generated output (docker compose content)
    const [nodeOutput, setNodeOutput] = useState('');
    
    const [farmerOutput, setFarmerOutput] = useState('');

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

    useEffect(() => {
	generateOutput({ skipRewardAddressCheck: true });
    }, []);

    // Generates the Docker Compose file content based on formData
    const generateNodeOutput = () => {
	if (!(formData.user === "root")) {
	    if (formData.nodeData === "/root/.local/share/subspace-node" ||
		/^\/home\/([^\/\0]+)\/\.local\/share\/subspace-node$/.test(formData.nodeData)) {
		setFormData((prevState) => ({
		    ...prevState,
		    nodeData: `/home/${formData.user}/.local/share/subspace-node`,
		}));
	    }
	    if (formData.nodeBinPath === "/root/.local/bin/subspace-node" ||
	       	/^\/home\/([^\/\0]+)\/\.local\/bin\/subspace-node$/.test(formData.nodeBinPath)) {
		setFormData((prevState) => ({
		    ...prevState,
		    nodeBinPath: `/home/${formData.user}/.local/bin/subspace-node`
		}));
	    }
	}

        const template = `\
[Unit]
Description=Subspace Node
Wants=network.target
After=network.target

[Service]
User=${formData.user}
Group=${formData.user}
ExecStart=${formData.nodeBinPath} \\
          --name ${formData.nodeName} \\
          --base-path ${formData.nodeData} \\
          --state-pruning archive-canonical \\
          --keep-blocks ${formData.archival === "on" ? "archive-canonical" : "256"} \\
          --chain ${chain} \\
          --validator \\
          --no-private-ip \\
          --listen-addr /ip4/0.0.0.0/tcp/${formData.nodePort} \\
          --dsn-listen-on /ip4/0.0.0.0/udp/${formData.nodeDsnPort}/quic-v1 \\
          --dsn-listen-on /ip4/0.0.0.0/tcp/${formData.nodeDsnPort} \\
          ${formData.extraNodeArgs ? "\\\n" + formData.extraNodeArgs : ""}
KillSignal=SIGINT
Restart=always
RestartSec=10
Nice=-5
LimitNOFILE=100000\
${formData.sandbox === "on" ? `
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true
ProtectKernelLogs=true
ProtectHostname=true
ProtectClock=true
ProtectProc=invisible
ProcSubset=pid
PrivateTmp=true
PrivateUsers=true
PrivateDevices=true
PrivateIPC=true
NoNewPrivileges=true
LockPersonality=true
RestrictRealtime=true
RestrictSUIDSGID=true
RestrictAddressFamilies=AF_INET AF_INET6
RestrictNamespaces=true
SystemCallArchitectures=native
UMask=0077` : "" }

[Install]
WantedBy=multi-user.target`;
        setNodeOutput(template);
    };

    const generateFarmerOutput = () => {
	if (!(formData.user === "root")) {
	    if (formData.farmerData === "/root/.local/share/subspace-farmer" ||
		/^\/home\/([^\/\0]+)\/\.local\/share\/subspace-farmer$/.test(formData.farmerData)) {
		setFormData((prevState) => ({
		    ...prevState,
		    farmerData: `/home/${formData.user}/.local/share/subspace-farmer`
		}));
	    }
	    if (formData.farmerBinPath === "/root/.local/bin/subspace-farmer" ||
	       	/^\/home\/([^\/\0]+)\/\.local\/bin\/subspace-farmer$/.test(formData.farmerBinPath)) {
		setFormData((prevState) => ({
		    ...prevState,
		    farmerBinPath: `/home/${formData.user}/.local/bin/subspace-farmer`
		}));
	    }
	}

        const template = `\
[Unit]
Description=Subspace Farmer
Wants=network.target
After=network.target
Wants=subspace-node.service
After=subspace-node.service

[Service]
User=${formData.user}
Group=${formData.user}
ExecStart=${formData.farmerBinPath} \\
          farm \\
          --reward-address ${formData.rewardAddress} \\
          --listen-on /ip4/0.0.0.0/udp/${formData.farmerPort}/quic-v1 \\
          --listen-on /ip4/0.0.0.0/tcp/${formData.farmerPort} \\
          path=${formData.farmerData},size=${formData.plotSize} ${formData.extraFarmerArgs === "" ? "" : "\\\n"}\
          ${formData.extraFarmerArgs}
KillSignal=SIGINT
Restart=always
RestartSec=10
Nice=-5
LimitNOFILE=100000\
${formData.sandbox === "on" ? `
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true
ProtectKernelLogs=true
ProtectHostname=true
ProtectClock=true
ProtectProc=invisible
ProcSubset=pid
PrivateTmp=true
PrivateUsers=true
PrivateDevices=true
PrivateIPC=true
NoNewPrivileges=true
LockPersonality=true
RestrictRealtime=true
RestrictSUIDSGID=true
RestrictAddressFamilies=AF_INET AF_INET6
RestrictNamespaces=true
SystemCallArchitectures=native
UMask=0077` : "" }

[Install]
WantedBy=multi-user.target`;
        setFarmerOutput(template);
    };

    const generateOutput = ({ skipRewardAddressCheck = false } = {}) => {
        const validationErrors = validateInputs();

	if (!skipRewardAddressCheck && formData.rewardAddress === 'st6GBwATPqtBkK5y4uXbV52euszPpFPw7wmkF8FywEqJaf8uP') {
            setErrors({
		...validationErrors,
		rewardAddress: 'Please enter your reward address'
            });
            return;
	}
	
	if (Object.keys(validationErrors).length === 0) {
	    generateNodeOutput();
	    generateFarmerOutput();
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
	if (!/^(102[4-9]|10[3-9]\d{1,2}|[2-9]\d{2,3}|[1-5]\d{4,4}|6[0-4]\d{3,3}|65[0-4]\d{2,2]|655[0-2]\d|6553[0-5])$/.test(formData.farmerPort)) {
            errors.farmerPort = 'Invalid Farmer Port';
        }
        if (!/^[a-zA-Z0-9_/-]+$/.test(formData.nodeName)) {
            errors.nodeName = 'Invalid Node Name';
        }
	if (!/^[a-zA-Z0-9_/-]+$/.test(formData.user)) {
            errors.user = 'Invalid System Username';
	}
	if (!/^(\/([^/]*\/?)*)?$/.test(formData.nodeData)) {
	    errors.nodeData = 'Invalid Node Data';
        }
	if (!/^(\/([^/]*\/?)*)?$/.test(formData.farmerData)) {
	    errors.farmerData = 'Invalid Farmer Data';
        }
	if (!/^\d+(G|T)?$/.test(formData.plotSize)) {
            errors.plotSize = 'Invalid Plot Size';
        }
        if (!/^st[a-zA-Z0-9]{47}$/.test(formData.rewardAddress)) {
            errors.rewardAddress = 'Invalid Reward Address';
        }
	if (!/^(\/([^/]*\/?)*)?$/.test(formData.nodeBinPath)) {
	    errors.nodeBinPath = 'Invalid Node Binary Path';
        }
	if (!/^(\/([^/]*\/?)*)?$/.test(formData.farmerBinPath)) {
	    errors.farmerBinPath = 'Invalid Farmer Binary Path';
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

    const handleCheckboxChange = (e) => {
	const { name, checked } = e.target;
	setFormData(prevData => ({
            ...prevData,
            [name]: checked ? "on" : "off"
        }));
    };

    return (
        <div className={`container ${styles['systemd-service-generator-form__container']} margin-vert--lg`} onKeyDown={handleKeyDown}>
            <h2 className={`text--center margin-bottom--m`}>Systemd Service File Generator</h2>
            <div className={`card ${styles['systemd-service-generator-form__card']}`} >
                <div className="card__body">
                    <div className={styles['systemd-service-generator-form__grid']}>
                        {[
                            { label: 'Node Port', name: 'nodePort' },
                            { label: 'Node DSN Port', name: 'nodeDsnPort' },
                            { label: 'Farmer Port', name: 'farmerPort' },
                            { label: 'Node Name', name: 'nodeName' },
                            { label: 'Plot Size', name: 'plotSize' },
                            { label: 'Reward Address', name: 'rewardAddress' },
                            { label: 'Node Data', name: 'nodeData' },
                            { label: 'Farmer Data', name: 'farmerData' },
                            { label: 'Node Binary Path', name: 'nodeBinPath' },
                            { label: 'Farmer Binary Path', name: 'farmerBinPath' },
                            { label: 'Extra Node Arguments', name: 'extraNodeArgs' },
                            { label: 'Extra Farmer Arguments', name: 'extraFarmerArgs' },
                            { label: 'System User', name: 'user' }
                        ].map(({ label, name }, index) => (
                            <div key={name} className={styles['systemd-service-generator-form__group']}>
                                <label
				    htmlFor={name}
				    className={`text--bold ${styles['systemd-service-generator-form__label']} ${glowingLabels.includes(name) ? styles['systemd-service-generator-form__label--glow'] : ""}`}
				    onMouseEnter={() => startLabelGlow(name)}
				    onAnimationEnd={() => endLabelGlow(name)}
				>
				    {label}:
				</label>
                                <input
                                    className={styles['systemd-service-generator-form__input']}
                                    name={name}
                                    placeholder={label}
                                    onChange={handleChange}
                                    value={formData[name]}
                                />
                                {errors[name] && <p className={styles['systemd-service-generator-form__text--error']}>{errors[name]}</p>}
                            </div>
                        ))}

			{[
                { label: 'Archival', name: 'archival' },
                { label: 'Sandbox', name: 'sandbox' }
                        ].map(({ label, name }, index) => (
                            <div key={name} className={styles['systemd-service-generator-form__checkbox-group']}>
                                <label
				    htmlFor={name}
				    className={`text--bold ${styles['systemd-service-generator-form__label']} ${glowingLabels.includes(name) ? styles['systemd-service-generator-form__label--glow'] : ""}`}
				    onMouseEnter={() => startLabelGlow(name)}
				    onAnimationEnd={() => endLabelGlow(name)}
				>
				    {label}:<br></br>
				</label>
                                <input
                                    className={`${styles['systemd-service-generator-form__checkbox']} ${styles['systemd-service-generator-form__input']}`}
                                    name={name}
                                    onChange={handleCheckboxChange}
                                    type="checkbox"
				    checked={formData[name] === "on" ? "checked" : ""}
                                />
                                {errors[name] && <p className={styles['systemd-service-generator-form__text--error']}>{errors[name]}</p>}
                            </div>
                        ))}
		    </div>
		    
		    <div className={`${styles['systemd-service-generator-form__group']} text--center`}>
                        <button className={`button button--primary button--lg ${styles['systemd-service-generator-form__button--primary']}`} onClick={generateOutput}>Generate</button>
		    </div>
		</div>
	    </div>
	    <div className="margin-top--lg container">
                <CodeBlock language="ini" title="subspace-node.service">{nodeOutput}</CodeBlock>
	    </div>
	    <div className="margin-top--lg container">
                <CodeBlock language="ini" title="subspace-farmer.service">{farmerOutput}</CodeBlock>
	    </div>
        </div>
    );
}


export { AdvancedSystemdServiceFileGenerator };
