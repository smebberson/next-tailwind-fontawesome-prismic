import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const Title = ({ slice }) => <PrismicRichText field={slice.primary.title} />;

export default Title;
