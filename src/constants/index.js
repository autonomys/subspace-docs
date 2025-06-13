/**
 * Centralized constants for the Autonomys documentation
 * 
 * This file aggregates all constants from various category files and exports them
 * as a single source of truth for the entire documentation site.
 * 
 * Usage:
 * import { CONSTANTS } from '@site/src/constants';
 * const icon = CONSTANTS.ICONS.WINDOWS;
 * 
 * Or for specific categories:
 * import { ICONS } from '@site/src/constants';
 */

// Import category constants
export { ICONS } from './icons';
// Future imports would go here:
// export { URLS } from './urls';
// export { NETWORKS } from './networks';
// export { MESSAGES } from './messages';

// Re-export as individual modules for convenience
import { ICONS } from './icons';

// Aggregate all constants into a single object
export const CONSTANTS = {
  ICONS,
  // Future constants will be added here as they're created:
  // URLS,
  // NETWORKS,
  // MESSAGES,
};

// Default export
export default CONSTANTS;