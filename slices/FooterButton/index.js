import React from 'react';
import link from '../../lib/link';

const FooterButton = ({ slice: { primary } }) => (
    <a
        href={link({ data: primary.link })}
        className={
            'text-emerald-50 bg-emerald-700 hover:bg-emerald-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
    >
        {primary.name}
    </a>
);

export default FooterButton;
