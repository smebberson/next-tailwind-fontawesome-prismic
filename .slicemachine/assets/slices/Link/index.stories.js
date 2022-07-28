import MyComponent from '../../../../slices/NavigationLink';

export default {
  title: 'slices/NavigationLink',
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
