import React from 'react';
import link from '../../lib/link';

const NavigationLink = ({ slice: { primary } }) => (
    <a
        key={primary.name}
        href={link({ data: primary.link })}
        className="text-emerald-300 hover:bg-emerald-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
        {primary.name}
    </a>
);

export default NavigationLink;
