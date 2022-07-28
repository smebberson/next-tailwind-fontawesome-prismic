import React from 'react';
import { RichText } from 'prismic-reactjs';

const Paragraph = ({ slice }) => <RichText render={slice.primary.paragraph} />;

export default Paragraph;
