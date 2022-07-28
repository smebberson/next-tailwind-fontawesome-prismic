import MyComponent from '../../../../slices/Link';

export default {
  title: 'slices/Link',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'link',
      items: [],
      primary: {
        name: 'Navigation link',
        link: { link_type: 'Web', url: 'https://prismic.io' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
