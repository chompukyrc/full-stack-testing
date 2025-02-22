import Icon from "@mdi/react";
import { mdiUnfoldMoreVertical } from "@mdi/js";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses,
    menuClasses,
} from "react-pro-sidebar";

const Header = () => {
    return (
        <div>
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: "#081028",
                    },
                }}
                className="h-screen w-[300px] !border-[#0B1739] px-7"
                style={{ boxShadow: "0px 8px 28px 0px rgba(1, 5, 17, 0.30)" }}
            >
                <div className="flex justify-between mt-[38px] font-medium">
                    <div className="text-[20px] flex items-center ">
                        <img
                            src="src/assets/LogoIcon.svg"
                            alt="logo"
                            className="mr-2"
                        />
                        Dashdark X
                    </div>
                    <div className="flex items-center opacity-20">
                        <Icon
                            path={mdiUnfoldMoreVertical}
                            title="More"
                            size={"24px"}
                            color="white"
                        />
                    </div>
                </div>
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? "#f5d9ff" : "#d359ff",
                                    backgroundColor: active
                                        ? "#081028"
                                        : undefined,
                                };
                        },
                    }}
                >
                    {/* Dashboard */}
                    <SubMenu
                        className=" !hover:bg-[#0B1739]"
                        label="Dashboard"
                        defaultOpen
                        rootStyles={{
                            ["& > ." + menuClasses.button]: {
                                color: "#9f0099",
                            },
                            ["." + menuClasses.subMenuContent]: {
                                backgroundColor: "#081028",
                                "&:hover": {
                                    backgroundColor: "#081028",
                                    // color: "#000000",
                                },
                            },
                        }}
                    >
                        <MenuItem
                            rootStyles={{
                                ["& > ." + menuClasses.button]: {
                                    color: "#000000",
                                },
                            }}
                        >
                            {" "}
                            All pages{" "}
                        </MenuItem>
                        <MenuItem> Reports </MenuItem>
                        <MenuItem> Products </MenuItem>
                        <MenuItem> Task </MenuItem>
                    </SubMenu>

                    {/* Users */}
                    <SubMenu
                        className=" !hover:bg-[#0B1739]"
                        label="Users"
                        defaultOpen
                        rootStyles={{
                            ["& > ." + menuClasses.button]: {
                                color: "#9f0099",
                                "&:hover": {
                                    backgroundColor: "#0B1739",
                                },
                            },
                            ["." + menuClasses.subMenuContent]: {
                                backgroundColor: "#081028",
                                // "&:hover": {
                                //     backgroundColor: "#eecef9",
                                // },
                            },
                        }}
                    >
                        <MenuItem> All pages </MenuItem>
                    </SubMenu>

                    {/* divider */}

                    {/* Settings */}
                    <SubMenu
                        className=" !hover:bg-[#0B1739]"
                        label="Settings"
                        defaultOpen
                        rootStyles={{
                            ["& > ." + menuClasses.button]: {
                                color: "#9f0099",
                                backgroundColor: "#081028",
                                "&:hover": {
                                    backgroundColor: "#0B1739",
                                },
                            },
                            ["." + menuClasses.subMenuContent]: {
                                backgroundColor: "#081028",
                                // "&:hover": {
                                //     backgroundColor: "#eecef9",
                                // },
                            },
                        }}
                    >
                        <MenuItem> All pages </MenuItem>
                    </SubMenu>

                    {/* Profile */}
                    <SubMenu
                        className=" !hover:bg-[#0B1739]"
                        label="Profile"
                        defaultOpen
                        rootStyles={{
                            ["& > ." + menuClasses.button]: {
                                color: "#9f0099",
                                "&:hover": {
                                    backgroundColor: "#0B1739",
                                },
                            },
                            ["." + menuClasses.subMenuContent]: {
                                backgroundColor: "#081028",
                                // "&:hover": {
                                //     backgroundColor: "#eecef9",
                                // },
                            },
                        }}
                    >
                        <MenuItem> All pages </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    );
};
export default Header;

