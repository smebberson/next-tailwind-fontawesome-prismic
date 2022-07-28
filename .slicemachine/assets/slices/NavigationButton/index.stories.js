import MyComponent from '../../../../slices/NavigationButton';

export default {
  title: 'slices/NavigationButton',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'navigation_button',
      items: [],
      primary: {
        name: 'Search',
        link: { link_type: 'Web', url: 'https://slicemachine.dev' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
