import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

import NavButton from '../slices/Button';
import NavLink from '../slices/Link';
import NavMenu from '../slices/Menu';

const Navigation = ({ data }) => {
    return (
        <Disclosure as="nav" className="bg-emerald-900">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <FontAwesomeIcon
                                        icon={faCube}
                                        className="block h-8 w-8 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {data.slices.map((item, itemIdx) =>
                                            item.slice_type === 'menu' ? (
                                                <NavMenu
                                                    slice={item}
                                                    key={itemIdx}
                                                />
                                            ) : (
                                                <NavLink
                                                    slice={item}
                                                    key={itemIdx}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {data.slices1.map((item, itemIdx) => (
                                    <NavButton slice={item} key={itemIdx} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {data.slices.map((item, itemIdx) => {
                                if (item.slice_type === 'menu') {
                                    return (
                                        <div key={itemIdx}>
                                            <div className="text-emerald-100 px-3 py-2 rounded-md text-sm font-medium">
                                                {item.primary.menuName}
                                            </div>
                                            {item.items.length > 0 && (
                                                <div className="ml-2">
                                                    {item.items.map(
                                                        (
                                                            menuItem,
                                                            menuItemIdx
                                                        ) => (
                                                            <div
                                                                key={
                                                                    menuItemIdx
                                                                }
                                                            >
                                                                <NavLink
                                                                    slice={{
                                                                        primary:
                                                                            {
                                                                                name: menuItem.menuItemName,
                                                                                link: menuItem.menuItemLink,
                                                                            },
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                    {item.variation ===
                                                        'withHighlight' && (
                                                        <div>
                                                            <NavLink
                                                                slice={{
                                                                    primary: {
                                                                        name: item
                                                                            .primary
                                                                            .highlightName,
                                                                        link: item
                                                                            .primary
                                                                            .highlightLink,
                                                                    },
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                return <NavLink slice={item} key={itemIdx} />;
                            })}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;
