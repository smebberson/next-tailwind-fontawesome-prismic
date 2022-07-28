import MyComponent from '../../../../slices/Button';

export default {
  title: 'slices/Button',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'button',
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
