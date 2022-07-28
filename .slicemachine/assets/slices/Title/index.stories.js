import MyComponent from '../../../../slices/Title';

export default {
  title: 'slices/Title',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'title',
      items: [],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Leverage enterprise solutions',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
