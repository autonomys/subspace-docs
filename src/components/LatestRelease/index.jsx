import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define constants for the filter pattern and API URLs
const SUBSPACE_FILTER_PATTERN = 'gemini-3h';
const SUBSPACE_API_URL = 'https://api.github.com/repos/autonomys/subspace/releases';
const SPACE_ACRES_API_URL = 'https://api.github.com/repos/autonomys/space-acres/releases';

// Define functions to generate keys for binaries
const generateSubspaceKey = (name) => {
    let key = 'subspace_';
    if (name.includes('node')) key += 'node_';
    else if (name.includes('farmer')) key += 'farmer_';

    if (name.includes('aarch64')) key += 'aarch64';
    else if (name.includes('skylake')) key += 'skylake';
    else if (name.includes('v2')) key += 'v2';

    if (name.includes('ubuntu')) key = `subspace_ubuntu_${key}`;
    else if (name.includes('windows')) key = `subspace_windows_${key}`;
    else if (name.includes('macos')) key = `subspace_macos_${key}`;

    return key;
};

const generateSpaceAcresKey = (name) => {
    let key = 'space_acres_';
    if (name.endsWith('.dmg')) key += 'macos';
    else if (name.endsWith('.exe')) key += 'windows';
    else if (name.endsWith('.deb')) key += 'linux_deb';
    else if (name.endsWith('.AppImage')) key += 'linux_appimage';
    return key;
};

// Define a React component to fetch the latest releases and extract binary names and URLs
const LatestRelease = ({ children }) => {
    const [subspaceReleaseData, setSubspaceReleaseData] = useState({});
    const [spaceAcresReleaseData, setSpaceAcresReleaseData] = useState({});
    const [subspaceError, setSubspaceError] = useState(null);
    const [spaceAcresError, setSpaceAcresError] = useState(null);

    useEffect(() => {
        // Asynchronous function to fetch Subspace releases from GitHub API
        const fetchSubspaceReleases = async () => {
            try {
                const subspaceResponse = await fetch(SUBSPACE_API_URL);
                if (!subspaceResponse.ok) {
                    throw new Error(`HTTP error! status: ${subspaceResponse.status}`);
                }
                const subspaceData = await subspaceResponse.json();

                const subspaceBinaries = {};
                const filteredSubspaceReleases = subspaceData.filter(release => release.tag_name.includes(SUBSPACE_FILTER_PATTERN));
                filteredSubspaceReleases.forEach(release => {
                    release.assets.forEach(asset => {
                        const { name, browser_download_url } = asset;
                        const key = generateSubspaceKey(name);
                        if (key) subspaceBinaries[key] = { name, url: browser_download_url };
                    });
                });
                setSubspaceReleaseData(subspaceBinaries);
            } catch (err) {
                setSubspaceError(`Failed to fetch Subspace releases: ${err.message}`);
            }
        };

        // Asynchronous function to fetch Space Acres releases from GitHub API
        const fetchSpaceAcresReleases = async () => {
            try {
                const spaceAcresResponse = await fetch(SPACE_ACRES_API_URL);
                if (!spaceAcresResponse.ok) {
                    throw new Error(`HTTP error! status: ${spaceAcresResponse.status}`);
                }
                const spaceAcresData = await spaceAcresResponse.json();

                const spaceAcresBinaries = {};
                const latestSpaceAcresRelease = spaceAcresData[0]; // Assuming the first release is the latest
                if (latestSpaceAcresRelease) {
                    latestSpaceAcresRelease.assets.forEach(asset => {
                        const { name, browser_download_url } = asset;
                        const key = generateSpaceAcresKey(name);
                        if (key) spaceAcresBinaries[key] = { name, url: browser_download_url };
                    });
                }
                setSpaceAcresReleaseData(spaceAcresBinaries);
            } catch (err) {
                setSpaceAcresError(`Failed to fetch Space Acres releases: ${err.message}`);
            }
        };

        fetchSubspaceReleases();
        fetchSpaceAcresReleases();
    }, []); // Empty dependency array ensures these effects run only once on component mount

    // Error handling: Display error messages if fetches fail
    if (subspaceError || spaceAcresError) {
        return (
            <div>
                {subspaceError && <div>Subspace Error: {subspaceError}</div>}
                {spaceAcresError && <div>Space Acres Error: {spaceAcresError}</div>}
            </div>
        );
    }

    // Loading state: Display loading message while fetching data
    if (!Object.keys(subspaceReleaseData).length || !Object.keys(spaceAcresReleaseData).length) {
        return <div>Loading...</div>;
    }

    // Render children with releaseData as argument
    return (
        <React.Fragment>
            {children({ subspaceReleaseData, spaceAcresReleaseData })}
        </React.Fragment>
    );
};

// PropTypes for type checking
LatestRelease.propTypes = {
    children: PropTypes.func.isRequired,
};

export default LatestRelease;
