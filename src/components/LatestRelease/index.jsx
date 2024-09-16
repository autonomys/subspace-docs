import { LatestRelease } from '@site/src/components/LatestRelease/index.jsx';

# Latest GitHub Releases

Here are the details for the latest releases:

<div>
    <LatestRelease>
        {({ subspaceReleaseData, spaceAcresReleaseData }) => {
            // Destructure subspaceReleaseData
            const {
                subspace_windows_node_aarch64,
                subspace_windows_node_skylake,
                subspace_windows_node_v2,
                subspace_windows_farmer_aarch64,
                subspace_windows_farmer_skylake,
                subspace_windows_farmer_v2,
                subspace_ubuntu_node_aarch64,
                subspace_ubuntu_node_skylake,
                subspace_ubuntu_node_v2,
                subspace_ubuntu_farmer_aarch64,
                subspace_ubuntu_farmer_skylake,
                subspace_ubuntu_farmer_v2,
                subspace_macos_node_aarch64,
                subspace_macos_farmer_aarch64
            } = subspaceReleaseData;

            // Destructure spaceAcresReleaseData
            const {
                space_acres_macos,
                space_acres_windows,
                space_acres_linux_deb,
                space_acres_linux_appimage
            } = spaceAcresReleaseData;

            return (
                <div>
                    <h2>Subspace Binary Names and URLs</h2>
                    <ul>
                        <li><strong>Windows Node AArch64:</strong> {subspace_windows_node_aarch64?.name} <a href={subspace_windows_node_aarch64?.url}>Download</a></li>
                        <li><strong>Windows Node Skylake:</strong> {subspace_windows_node_skylake?.name} <a href={subspace_windows_node_skylake?.url}>Download</a></li>
                        <li><strong>Windows Node V2:</strong> {subspace_windows_node_v2?.name} <a href={subspace_windows_node_v2?.url}>Download</a></li>
                        <li><strong>Windows Farmer AArch64:</strong> {subspace_windows_farmer_aarch64?.name} <a href={subspace_windows_farmer_aarch64?.url}>Download</a></li>
                        <li><strong>Windows Farmer Skylake:</strong> {subspace_windows_farmer_skylake?.name} <a href={subspace_windows_farmer_skylake?.url}>Download</a></li>
                        <li><strong>Windows Farmer V2:</strong> {subspace_windows_farmer_v2?.name} <a href={subspace_windows_farmer_v2?.url}>Download</a></li>
                        <li><strong>Ubuntu Node AArch64:</strong> {subspace_ubuntu_node_aarch64?.name} <a href={subspace_ubuntu_node_aarch64?.url}>Download</a></li>
                        <li><strong>Ubuntu Node Skylake:</strong> {subspace_ubuntu_node_skylake?.name} <a href={subspace_ubuntu_node_skylake?.url}>Download</a></li>
                        <li><strong>Ubuntu Node V2:</strong> {subspace_ubuntu_node_v2?.name} <a href={subspace_ubuntu_node_v2?.url}>Download</a></li>
                        <li><strong>Ubuntu Farmer AArch64:</strong> {subspace_ubuntu_farmer_aarch64?.name} <a href={subspace_ubuntu_farmer_aarch64?.url}>Download</a></li>
                        <li><strong>Ubuntu Farmer Skylake:</strong> {subspace_ubuntu_farmer_skylake?.name} <a href={subspace_ubuntu_farmer_skylake?.url}>Download</a></li>
                        <li><strong>Ubuntu Farmer V2:</strong> {subspace_ubuntu_farmer_v2?.name} <a href={subspace_ubuntu_farmer_v2?.url}>Download</a></li>
                        <li><strong>macOS Node AArch64:</strong> {subspace_macos_node_aarch64?.name} <a href={subspace_macos_node_aarch64?.url}>Download</a></li>
                        <li><strong>macOS Farmer AArch64:</strong> {subspace_macos_farmer_aarch64?.name} <a href={subspace_macos_farmer_aarch64?.url}>Download</a></li>
                    </ul>

                    <h2>Space Acres Binary Names and URLs</h2>
                    <ul>
                        <li><strong>macOS:</strong> {space_acres_macos?.name} <a href={space_acres_macos?.url}>Download</a></li>
                        <li><strong>Windows:</strong> {space_acres_windows?.name} <a href={space_acres_windows?.url}>Download</a></li>
                        <li><strong>Linux (DEB):</strong> {space_acres_linux_deb?.name} <a href={space_acres_linux_deb?.url}>Download</a></li>
                        <li><strong>Linux (AppImage):</strong> {space_acres_linux_appimage?.name} <a href={space_acres_linux_appimage?.url}>Download</a></li>
                    </ul>
                </div>
            );
        }}
    </LatestRelease>
</div>
