import React from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    menuClasses,
    MenuItemStyles,
} from "react-pro-sidebar";

const theme = {
    sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
    },
    menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
            backgroundColor: "#00458b",
            color: "#b6c8d9",
        },
        disabled: {
            color: "#3e5e7e",
        },
    },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SidebarComponent: React.FC = () => {
    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: "13px",
            fontWeight: 400,
        },

        SubMenuExpandIcon: {
            color: "#b6b7b9",
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(theme.menu.menuContent, 1)
                    : "transparent",
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: theme.menu.disabled.color,
            },
            "&:hover": {
                backgroundColor: hexToRgba(theme.menu.hover.backgroundColor, 1),
                color: theme.menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };

    return (
        <div className="flex h-screen">
            <Sidebar
                breakPoint="md"
                backgroundColor={hexToRgba(theme.sidebar.backgroundColor, 1)}
                rootStyles={{
                    color: theme.sidebar.color,
                }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex-1 mb-8">
                        <Menu menuItemStyles={menuItemStyles}>
                            <SubMenu label="Maps">
                                <MenuItem> Google maps</MenuItem>
                                <MenuItem> Open street maps</MenuItem>
                            </SubMenu>
                            <SubMenu label="Theme">
                                <MenuItem> Dark</MenuItem>
                            </SubMenu>
                            <SubMenu label="Components">
                                <MenuItem> Grid</MenuItem>
                                <MenuItem> Layout</MenuItem>
                                <SubMenu label="Forms">
                                    <MenuItem> Input</MenuItem>
                                    <MenuItem> Select</MenuItem>
                                    <SubMenu label="More">
                                        <MenuItem> CheckBox</MenuItem>
                                        <MenuItem> Radio</MenuItem>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>
                        </Menu>

                        <div className="px-6 mb-2 mt-8"></div>

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem>Examples</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default SidebarComponent;

