import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock'

function DockerFileGenerator() {
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
    const [output, setOutput] = useState('');
    const [snapshots, setSnapshots] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/repos/subspace/subspace/releases')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch GitHub releases');
                }
                return res.json();
            })
            .then(data => {
                const validSnapshots = data.map(release => release.tag_name).filter(tag => /^gemini-3f-.*$/.test(tag));
                setFormData(prevData => ({ ...prevData, snapshot: validSnapshots[0] }));
                setSnapshots(validSnapshots, generateOutput);
            })
	    .then(() => {
		generateOutput();
	    })
            .catch(err => {
                setErrors({ fetchError: err.message });
            });
    }, []);


    const generateOutput = () => {
        const validationErrors = validateInputs();
	
        if (Object.keys(validationErrors).length === 0) {
	    let updatedSnapshot = formData.snapshot;
	    let nodeDataOutput = formData.nodeData ? `${formData.nodeData}:/var/subspace:rw` : 'node-data:/var/subspace:rw';
	    let farmerDataOutput = formData.farmerData ? `${formData.farmerData}:/var/subspace:rw` : 'farmer-data:/var/subspace:rw';

	    if (formData.arch === 'aarch64') {
		updatedSnapshot += '-aarch64';
	    }
            const template = `
version: "3.7"
services:
node:
  image: ghcr.io/subspace/node:${updatedSnapshot}
  volumes:
    - ${nodeDataOutput}
  ports:
    - "0.0.0.0:${formData.nodePort}:30333"
    - "0.0.0.0:${formData.nodeDsnPort}:30433"
  restart: unless-stopped
  command: [
    "--chain", "gemini-3f",
    "--base-path", "/var/subspace",
    "--execution", "wasm",
    "--blocks-pruning", "256",
    "--state-pruning", "archive",
    "--port", "30333",
    "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
    "--rpc-cors", "all",
    "--rpc-methods", "unsafe",
    "--rpc-external",
    "--no-private-ipv4",
    "--validator",
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
      image: ghcr.io/subspace/farmer:${updatedSnapshot}
      volumes:
      - ${farmerDataOutput}
  ports:
      - "0.0.0.0:${formData.farmerPort}:30533"
    restart: unless-stopped
    command: [
      "farm",
      "--node-rpc-url", "ws://node:9944",
      "--listen-on", "/ip4/0.0.0.0/tcp/30533",
      "--reward-address", "${formData.rewardAddress}",
      "path=/var/subspace,size=${formData.plotSize}",
    ]
    volumes:
      node-data:
      farmer-data:
            `;
            setOutput(template);
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

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
	if (!/^(\/[^/]+)*$/.test(formData.nodeData)) {
	    errors.nodeData = 'Invalid Node Data';
        }
        if (!/^(\/[^/]+)*$/.test(formData.farmerData)) {
	    errors.farmerData = 'Invalid Farmer Data';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="container margin-vert--lg">
	    <h2 className="text--center margin-bottom--m">Docker Compose File Generator</h2>

	    <div className="card">
                <div className="card__body">
		    
		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="nodePort" className="col col--4 form-label text--bold">Node Port:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="nodePort" 
				placeholder="Node Port" 
				onChange={handleChange} 
				value={formData.nodePort}
			    />
			    {errors.nodePort && <p style={{ color: 'red' }} className="text--error">{errors.nodePort}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="nodeDsnPort" className="col col--4 form-label text--bold">Node DSN Port:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}> 
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="nodeDsnPort" 
				placeholder="Node DSN Port" 
				onChange={handleChange} 
				value={formData.nodeDsnPort}
			    />
			    {errors.nodeDsnPort && <p style={{ color: 'red' }} className="text--error">{errors.nodeDsnPort}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="farmerPort" className="col col--4 form-label text--bold">Farmer Port:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="farmerPort" 
				placeholder="Farmer Port" 
				onChange={handleChange} 
				value={formData.farmerPort}
			    />
			    {errors.farmerPort && <p style={{ color: 'red' }} className="text--error">{errors.farmerPort}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="nodeName" className="col col--4 form-label text--bold">Node Name:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="nodeName" 
				placeholder="Node Name" 
				onChange={handleChange} 
				value={formData.nodeName}
			    />
			    {errors.nodeName && <p style={{ color: 'red' }} className="text--error">{errors.nodeName}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="snapshot" className="col col--4 form-label text--bold">Snapshot:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <select
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="snapshot"
				value={formData.snapshot}
				onChange={handleChange}
			    >
				{snapshots.map(snap => <option key={snap} value={snap}>{snap}</option>)}
			    </select>
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="arch" className="col col--4 form-label text--bold">Architecture:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <select
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="arch"
				value={formData.arch}
				onChange={handleChange}
			    >
				<option value="x86_64">x86_64 (skylake+)</option>
				<option value="aarch64">aarch64</option>
			    </select>
			</div>
		    </div>


		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="plotSizet" className="col col--4 form-label text--bold">Plot Size:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="plotSize" 
				placeholder="Plot Size" 
				onChange={handleChange} 
				value={formData.plotSize}
			    />
			    {errors.plotSize && <p style={{ color: 'red' }} className="text--error">{errors.plotSize}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="rewardAddress" className="col col--4 form-label text--bold">Reward Address:</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}> 
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="rewardAddress" 
				placeholder="Reward Address" 
				onChange={handleChange} 
				value={formData.rewardAddress}
			    />
			    {errors.rewardAddress && <p style={{ color: 'red' }} className="text--error">{errors.rewardAddress}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="nodeData" className="col col--4 form-label text--bold">Node Data (Optional):</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}>
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="nodeData" 
				placeholder="Node Data (Optional)" 
				onChange={handleChange} 
				value={formData.nodeData}
			    />
			    {errors.nodeData && <p style={{ color: 'red' }} className="text--error">{errors.nodeData}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-bottom--sm">
			<label htmlFor="farmerData" className="col col--4 form-label text--bold">Farmer Data (Optional):</label>
			<div className="col col--8" style={{ paddingLeft: '0rem', paddingRight: '1rem' }}> 
			    <input
				className="form-input"
				style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
				name="farmerData" 
				placeholder="Farmer Data (Optional)" 
				onChange={handleChange} 
				value={formData.farmerData}
			    />
			    {errors.farmerData && <p style={{ color: 'red' }} className="text--error">{errors.farmerData}</p>}
			</div>
		    </div>

		    <div className="form-group row margin-top--md">
                        <div className="col col--12 text--center">
                            <button className="button button--primary button--lg" onClick={generateOutput}>Generate</button>
                        </div>
                    </div>
		</div>
	    </div>
	    
	    <div className="margin-top--lg">
		<CodeBlock language="yaml" title="docker-compose.yaml">{output}</CodeBlock>
	    </div>
        </div>
    );
}

export default DockerFileGenerator;
