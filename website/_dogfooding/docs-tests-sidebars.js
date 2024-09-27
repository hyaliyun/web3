/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @typedef {import('@docusaurus/plugin-content-docs').SidebarsConfig} SidebarsConfig
 * @typedef {import('@docusaurus/plugin-content-docs/lib/sidebars/types').SidebarItemConfig} SidebarItemConfig
 */

/** @type {SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
      className: 'red',
      label: 'Index',
    },
    'doc-without-sidebar',
    'doc-with-another-sidebar',
    'doc-with-last-update',
    {
      type: 'category',
      label: 'Tests',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'tests',
        },
        {
          type: 'link',
          label: 'External Link test',
          href: 'https://docusaurus.io',
        },
        {
          type: 'category',
          label: 'Sidebar item description tests',
          description: 'Some custom category description',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'link',
              label: 'Link without description',
              href: 'https://docusaurus.io',
            },
            {
              type: 'link',
              label: 'Link with description',
              href: 'https://docusaurus.io',
              description: 'Some link description',
            },
            {
              type: 'category',
              label: 'Category without description',
              items: [
                {
                  type: 'link',
                  label: 'Link ',
                  href: 'https://docusaurus.io',
                },
              ],
            },
            {
              type: 'category',
              label: 'Category with description',
              description: 'Some category description',
              items: [
                {
                  type: 'link',
                  label: 'Link ',
                  href: 'https://docusaurus.io',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Another category with index',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: ['more-test'],
    },
    {
      type: 'category',
      label: 'Huge sidebar category',
      items: [
        ...[
          {
            type: 'link',
            href: '/',
            label: 'Test Test test test test test test',
          },
        ],
        ...generateHugeSidebarItems(),
      ],
    },
    {
      type: 'category',
      label: 'Link tests',
      className: 'red',
      items: [
        {
          type: 'link',
          label: 'External link absolute',
          href: 'https://github.com/facebook/docusaurus',
        },
        {
          type: 'link',
          label: 'pathname:/// link',
          href: 'pathname:///some/local/path',
        },
        {
          type: 'link',
          label: 'pathname:/// link (no baseUrl)',
          href: 'pathname:///some/local/path',
          autoAddBaseUrl: false,
        },
      ],
    },
    {
      type: 'category',
      label: 'TOC tests',
      className: 'red',
      items: [
        {
          type: 'autogenerated',
          dirName: 'toc',
        },
      ],
    },
    {
      type: 'category',
      label: 'HTML items tests',
      collapsed: false,
      collapsible: false,
      items: [
        // Title
        {
          type: 'html',
          value: 'Some Text',
          defaultStyle: true,
        },
        // Divider
        {
          type: 'html',
          value:
            '<span style="border-top: 1px solid var(--ifm-color-gray-500); display: block;margin: 0.5rem 0 0.25rem 1rem;" />',
        },
        // Image
        {
          type: 'html',
          defaultStyle: true,
          value: `
    <span style="font-size: 0.5rem; color: lightgrey;">Powered by</span>
    <img style="width: 100px; height: 100px; display: block;" src="/img/docusaurus.png" alt="Docusaurus Logo" />
  `,
        },
      ],
    },
  ],
  anotherSidebar: ['dummy'],
};
module.exports = sidebars;

function generateHugeSidebarItems() {
  const linksCount = 8;
  const categoriesCount = 8;

  /**
   * @param {number} maxLevel
   * @param {number} currentLevel
   * @returns {SidebarItemConfig[]}
   */
  function generateRecursive(maxLevel, currentLevel = 0) {
    if (currentLevel === maxLevel) {
      return [
        {
          type: 'link',
          href: '/',
          label: `Link (level ${currentLevel + 1})`,
        },
      ];
    }

    const linkItems = Array.from(Array(linksCount).keys()).map((index) => ({
      type: 'link',
      href: '/',
      label: `Link ${index} (level ${currentLevel + 1})`,
    }));

    const categoryItems = Array.from(Array(categoriesCount).keys()).map(
      (index) => ({
        type: 'category',
        label: `Category ${index} (level ${currentLevel + 1})`,
        items: generateRecursive(maxLevel, currentLevel + 1),
      }),
    );

    return [...linkItems, ...categoryItems];
  }

  return generateRecursive(3);
}
