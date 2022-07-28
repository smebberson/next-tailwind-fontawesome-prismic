export const navigation = `
navigation {
    slices {
        ...on link {
            variation {
                ...on default {
                    primary {
                        name
                        link
                    }
                }
            }
        }
        ...on menu {
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
        ...on button {
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
