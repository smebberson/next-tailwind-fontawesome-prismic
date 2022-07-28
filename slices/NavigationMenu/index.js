import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { usePopper } from 'react-popper';
import { useState } from 'react';

import classNames from '../../lib/class-names';
import link from '../../lib/link';

const NavigationMenu = ({ slice }) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'offset', options: { offset: [0, 14] } }],
    });

    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button
                        ref={setReferenceElement}
                        className="text-emerald-300 hover:bg-emerald-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <span>{slice.primary.menuName}</span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={classNames(
                                open ? 'text-emerald-600' : 'text-emerald-400',
                                'ml-2 h-3 w-3 group-hover:text-emerald-500 transition ease-in-out duration-150'
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Popover.Panel
                        className="z-10"
                        ref={setPopperElement}
                        style={styles.popper}
                        {...attributes.popper}
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {slice.items.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={link({
                                            data: item.menuItemLink,
                                        })}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-emerald-50 transition ease-in-out duration-150"
                                    >
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-emerald-900 flex items-center">
                                                {item.menuItemName}
                                                {item.menuItemLink.link_type ===
                                                    'Web' && (
                                                    <FontAwesomeIcon
                                                        className="w-3 h-3 ml-2"
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                )}
                                            </p>
                                            <div className="mt-1 text-sm text-emerald-500">
                                                {item.menuItemDescription}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            {slice.variation === 'withHighlight' && (
                                <div className="p-5 bg-emerald-50 sm:p-8">
                                    <a
                                        href={link({
                                            data: slice.primary.highlightLink,
                                        })}
                                        className="-m-3 p-3 flow-root rounded-md hover:bg-emerald-100 transition ease-in-out duration-150"
                                    >
                                        <span className="flex items-center">
                                            <span className="text-base font-medium text-emerald-900 flex items-center">
                                                {slice.primary.highlightName}
                                                {slice.primary.highlightLink
                                                    .link_type === 'Web' && (
                                                    <FontAwesomeIcon
                                                        className="w-3 h-3 ml-2"
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                )}
                                            </span>
                                        </span>
                                        <span className="mt-1 block text-sm text-emerald-500">
                                            {slice.primary.highlightDescription}
                                        </span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </Popover.Panel>
                </>
            )}
        </Popover>
    );
};

export default NavigationMenu;
