import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const skyblockSidebars: SidebarsConfig = {
    // SkyBlock sidebar with the specified categories
    skyblockSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Accessories',
            link: {
                type: 'doc',
                id: 'accessories/index',
            },
            items: [],
        },
        {
            type: 'category',
            label: 'Armor',
            link: {
                type: 'doc',
                id: 'armor/index',
            },
            items: [],
        },
        {
            type: 'category',
            label: 'Collections',
            link: {
                type: 'doc',
                id: 'collections/index',
            },
            items: [
                {
                    type: 'category',
                    label: 'Mining',
                    link: {
                        type: 'doc',
                        id: 'collections/mining/index',
                    },
                    items: [
                        'collections/mining/cobblestone',
                        'collections/mining/coal'
                    ]
                },
                {
                    type: 'category',
                    label: 'Farming',
                    link: {
                        type: 'doc',
                        id: 'collections/farming/index',
                    },
                    items: [
                        'collections/farming/wheat',
                        'collections/farming/carrot'
                    ]
                },
                {
                    type: 'category',
                    label: 'Combat',
                    link: {
                        type: 'doc',
                        id: 'collections/combat/index',
                    },
                    items: [
                        'collections/combat/rotten-flesh',
                        'collections/combat/bone'
                    ]
                },
                {
                    type: 'category',
                    label: 'Fishing',
                    link: {
                        type: 'doc',
                        id: 'collections/fishing/index',
                    },
                    items: [
                        'collections/fishing/raw-fish',
                        'collections/fishing/pufferfish'
                    ]
                }
            ],
        },
    ],
};

export default skyblockSidebars;