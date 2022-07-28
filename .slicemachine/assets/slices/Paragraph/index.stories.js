import MyComponent from '../../../../slices/Paragraph';

export default {
  title: 'slices/Paragraph',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'paragraph',
      items: [],
      primary: {
        paragraph: [
          {
            type: 'paragraph',
            text: 'Est ex esse qui magna aute in ad sunt consequat cupidatat duis duis.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
