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
            items: ['accessories/index'],
        },
        {
            type: 'category',
            label: 'Armor',
            items: ['armor/index'],
        },
        {
            type: 'category',
            label: 'Collections',
            items: [
                'collections/index',
                {
                    type: 'category',
                    label: 'Mining',
                    items: [
                        'collections/mining/index',
                        'collections/mining/cobblestone',
                        'collections/mining/coal'
                    ]
                },
                {
                    type: 'category',
                    label: 'Farming',
                    items: [
                        'collections/farming/index',
                        'collections/farming/wheat',
                        'collections/farming/carrot'
                    ]
                },
                {
                    type: 'category',
                    label: 'Combat',
                    items: [
                        'collections/combat/index',
                        'collections/combat/rotten-flesh',
                        'collections/combat/bone'
                    ]
                },
                {
                    type: 'category',
                    label: 'Fishing',
                    items: [
                        'collections/fishing/index',
                        'collections/fishing/raw-fish',
                        'collections/fishing/pufferfish'
                    ]
                }
            ],
        },
    ],
};

export default skyblockSidebars;