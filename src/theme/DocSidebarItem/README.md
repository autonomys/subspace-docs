# Sidebar Item Indicators

This feature allows you to mark both categories and individual pages with special indicators in the sidebar navigation.

## Available Indicators

### Featured Items (Gold Star)
Featured items display a gold star icon with a subtle shimmer animation.

### Testnet Items (Orange A/B Testing Icon)
Testnet-related items display an orange A/B testing icon to indicate they are for testnet use.

## How to Use

### For Categories (Folders)

Edit the `_category_.json` file in any folder and add the `customProps` object:

```json
{
    "label": "Category Name",
    "position": 1,
    "customProps": {
        "featured": true
    }
}
```

For testnet categories:
```json
{
    "label": "Category Name",
    "position": 1,
    "customProps": {
        "testnet": true
    }
}
```

Examples:
- Featured: `/docs/farming-&-staking/farming/space-acres/_category_.json`
- Testnet: `/docs/farming-&-staking/staking/_category_.json`

### For Individual Pages

Add `sidebar_custom_props` to the frontmatter of any markdown file:

```yaml
---
title: Page Title
sidebar_position: 1
sidebar_custom_props:
  featured: true
---
```

For testnet pages:
```yaml
---
title: Page Title
sidebar_position: 1
sidebar_custom_props:
  testnet: true
---
```

Examples:
- Featured: `/docs/farming-&-staking/wallets/talisman.md`
- Testnet: `/docs/farming-&-staking/farming/cli/taurus-network.mdx`

## Implementation

The feature is implemented through Docusaurus theme overrides:
- `/src/theme/DocSidebarItem/Category/index.js` - Handles categories
- `/src/theme/DocSidebarItem/Link/index.js` - Handles individual pages

Both use the native Docusaurus `customProps` system, ensuring compatibility with future updates.

## Currently Marked Items

### Featured Items
- **Space Acres** (category)
- **Talisman** (individual page)

### Testnet Items
- **Operators & Nominators** (category)
- **Taurus Network** (individual page)