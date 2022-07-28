export const navigation = `
navigation {
    slices {
        ...on navigation_link {
            variation {
                ...on default {
                    primary {
                        name
                        link
                    }
                }
            }
        }
        ...on navigation_menu {
            variation {
                ...on default {
                    items {
                        menuItemName
                        menuItemDescription
                        menuItemLink
                    }
                    primary {
                        menuName
                    }
                }
                ...on withHighlight {
                    items {
                        menuItemName
                        menuItemDescription
                        menuItemLink
                    }
                    primary {
                        menuName
                        highlightName
                        highlightDescription
                        highlightLink
                    }
                }
            }
        }
    }
    slices1 {
        ...on navigation_button {
            variation {
                ...on default {
                    primary {
                        name
                        link
                    }
                }
            }
        }
    }
}`;
