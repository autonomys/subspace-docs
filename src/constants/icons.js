/**
 * Icon constants for the Autonomys documentation
 * 
 * All icon definitions should be added here to maintain consistency
 * across the documentation. Icons can be either:
 * 1. Iconify icons: Use the standard Iconify naming convention (e.g., 'mdi:home')
 * 2. Local SVG files: Prefix with 'local:' followed by the path (e.g., 'local:/img/icons/custom.svg')
 * 
 * Naming Convention:
 * - Use UPPER_SNAKE_CASE for icon names
 * - Group related icons together with comments
 * - Use descriptive names that indicate the icon's purpose
 * 
 * Usage:
 * import { ICONS } from '@site/src/constants';
 * <Icon icon={ICONS.WINDOWS} />
 */

export const ICONS = {
  // ===== Operating Systems =====
  UBUNTU: 'simple-icons:ubuntu',
  WINDOWS: 'mdi:microsoft-windows',
  MACOS: 'simple-icons:apple',
  
  // ===== Development & Tools =====
  DOCKER: 'simple-icons:docker',
  CODE: 'mdi:code-braces',
  SERVICE: 'mdi:cog',
  DEVELOPER: 'lineicons:dev',
  NODE: 'hugeicons:blockchain-06',
  CLUSTER: 'carbon:edge-cluster',
  
  // ===== Social & Communication =====
  GITHUB: 'mdi:github',
  DISCORD: 'mdi:discord',
  YOUTUBE: 'mdi:youtube',
  TELEGRAM: 'mdi:telegram',
  LINKEDIN: 'mdi:linkedin',
  MEDIUM: 'mdi:medium',
  FORUM: 'mdi:forum',
  X_TWITTER: 'local:/img/icons/x-twitter.svg', // Local SVG file
  
  // ===== Special Purpose Icons =====
  RECOMMENDED: 'material-symbols-light:star-shine', // Used for featured/recommended items
  TESTNET: 'mingcute:taurus-fill', // Used for testnet indicators
  AUTONOMYS: 'token:autonomys', // Autonomys brand icon
  
  // ===== Navigation & Content =====
  WEB: 'mdi:web',
  ACADEMY: 'mdi:school',
  EXPLORER: 'mdi:cube-scan',
  INFINITY: 'mdi:infinity',
  
  // ===== Page Actions =====
  ROCKET_LAUNCH: 'mdi:rocket-launch',
  CONTRIBUTE: 'material-symbols:partner-exchange',
  LINK: 'mdi:link-variant',
  SHARE: 'mdi:share-variant',
  SHARE_FILLED: 'fluent:share-ios-24-filled',
  
  // ===== Status Indicators =====
  CHECK_CIRCLE: 'mdi:check-circle',
  CLOSE_CIRCLE: 'mdi:close-circle',
  STATUS_GREEN: 'mdi:circle',
  STATUS_ORANGE: 'mdi:circle',
  STATUS_RED: 'mdi:circle',
  CHECK: 'mdi:check',
  CROSS: 'mdi:close',
  LIMITED: 'mdi:alert-circle-outline',
  FUTURE: 'mdi:clock-outline',
  QUESTION: 'mdi:help-circle-outline',
  ANSWER: 'mdi:message-reply-text',
  CALENDAR: 'mdi:calendar',
  
  // ===== Network & Security =====
  PORT_FORWARD: 'mdi:router-network',
  FIREWALL: 'mdi:shield-lock',
  
  // ===== File System =====
  FOLDER: 'mdi:folder',
  FOLDER_OPEN: 'mdi:folder-open',
  
  // ===== Hardware Vendors =====
  NVIDIA: 'lineicons:nvidia',
  AMD: 'bi:amd',
  
  // ===== Roles & Participants =====
  FARMER: 'mdi:tractor',
  NOMINATOR: 'mdi:account-heart',
  OPERATOR: 'mdi:server',
  TIMEKEEPER: 'mdi:clock',
  COMMUNITY: 'mdi:account-group',
};