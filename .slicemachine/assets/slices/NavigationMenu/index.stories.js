import MyComponent from '../../../../slices/NavigationMenu';

export default {
  title: 'slices/NavigationMenu',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'navigation_menu',
      items: [
        {
          menuItemName: 'unleash impactful mindshare',
          menuItemDescription: 'incubate open-source technologies',
          menuItemLink: {
            link_type: 'Web',
            url: 'https://prismic.io',
          },
        },
        {
          menuItemName: 'benchmark mission-critical paradigms',
          menuItemDescription: 'brand scalable synergies',
          menuItemLink: {
            link_type: 'Web',
            url: 'https://prismic.io',
          },
        },
        {
          menuItemName: 'enhance impactful experiences',
          menuItemDescription: 'visualize world-class web services',
          menuItemLink: {
            link_type: 'Web',
            url: 'http://google.com',
          },
        },
        {
          menuItemName: 'streamline back-end action-items',
          menuItemDescription: 'evolve dynamic web services',
          menuItemLink: {
            link_type: 'Web',
            url: 'http://twitter.com',
          },
        },
      ],
      primary: { menuName: 'Our products' },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';

export const _WithHighlight = () => (
  <MyComponent
    slice={{
      variation: 'withHighlight',
      name: 'With highlight',
      slice_type: 'navigation_menu',
      items: [
        {
          menuItemName: 'disintermediate 24/365 eyeballs',
          menuItemDescription: 'innovate proactive metrics',
          menuItemLink: {
            link_type: 'Web',
            url: 'https://slicemachine.dev',
          },
        },
        {
          menuItemName: 'seize frictionless initiatives',
          menuItemDescription: 'aggregate B2B niches',
          menuItemLink: {
            link_type: 'Web',
            url: 'https://prismic.io',
          },
        },
        {
          menuItemName: 'optimize web-enabled platforms',
          menuItemDescription: 'repurpose rich e-commerce',
          menuItemLink: {
            link_type: 'Web',
            url: 'http://twitter.com',
          },
        },
      ],
      primary: {
        menuName: 'Our products',
        highlightName: 'leverage user-centric channels',
        highlightDescription: 'incubate e-business supply-chains',
        highlightLink: { link_type: 'Web', url: 'http://google.com' },
      },
      id: '_WithHighlight',
    }}
  />
);
_WithHighlight.storyName = 'With highlight';
