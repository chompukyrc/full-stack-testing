import React from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    menuClasses,
    MenuItemStyles,
} from "react-pro-sidebar";
import Icon from "@mdi/react";
import {
    mdiUnfoldMoreVertical,
    mdiHome,
    mdiAccount,
    mdiCog,
    mdiMenu,
} from "@mdi/js";
import { useUserStore } from "../stores/user.store";

const theme = {
    sidebar: {
        backgroundColor: "#081028", // bg default
        color: "#AEB9E1", // text color default
    },
    menu: {
        menuContent: "#081028", // bg ข้างใน
        icon: "#59d0ff",
        hover: {
            backgroundColor: "#081028", // bg hover
            color: "#ffffff", // text hover
        },
        disabled: {
            color: "#3e5e7e",
        },
        active: {
            backgroundColor: "1fff00",
            color: "1fff00",
        },
    },
};

// hex to rgba converter  1fff00
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SidebarComponent: React.FC = () => {
    const [toggled, setToggled] = React.useState(false);
    const [broken, setBroken] = React.useState(false);
    const user = useUserStore((state) => state.user);

    const mockId = "1282ba1f-1fc5-4598-8b0c-0143c5c0eaab";
    // call function to get user profile
    React.useEffect(() => {
        useUserStore.getState().getUserProfile(mockId);
    }, []);

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: "14px",
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
            color: open ? "#4338CA" : "#AEB9E1",
        }),
        icon: ({ open }) => ({
            color: open ? "#4338CA" : "#AEB9E1",
        }),
    };

    return (
        <div className=" bg-[#081028]">
            <Sidebar
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                style={{ boxShadow: "0px 8px 28px 0px rgba(1, 5, 17, 0.30)" }}
                className="!border-[#0B1739] h-screen w-[300px]"
                breakPoint="md"
                onBreakPoint={setBroken}
                backgroundColor={hexToRgba(theme.sidebar.backgroundColor, 1)}
                rootStyles={{
                    color: theme.sidebar.color,
                }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between font-medium p-7">
                        <div className="text-[20px] flex items-center text-white">
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
                    <div className="flex-1">
                        <Menu menuItemStyles={menuItemStyles} className="p-7">
                            {/* Dashboard */}
                            <SubMenu
                                label="Dashboard"
                                defaultOpen
                                icon={<Icon path={mdiHome} size={"20px"} />}
                            >
                                <MenuItem>All pages</MenuItem>
                                <MenuItem>Reports</MenuItem>
                                <MenuItem>Products</MenuItem>
                                <MenuItem>Task</MenuItem>
                            </SubMenu>

                            {/* Users */}
                            <SubMenu
                                label="Users"
                                icon={<Icon path={mdiAccount} size={"20px"} />}
                            >
                                <MenuItem>List Users</MenuItem>
                                <MenuItem>Edit User</MenuItem>
                            </SubMenu>
                        </Menu>

                        {/* Divider */}
                        <div className=" w-full border border-b opacity-20"></div>

                        <Menu menuItemStyles={menuItemStyles} className="p-7">
                            {/* Settings */}
                            <SubMenu
                                label="Settings"
                                icon={<Icon path={mdiCog} size={"20px"} />}
                            >
                                <MenuItem>...</MenuItem>
                                <MenuItem>...</MenuItem>
                            </SubMenu>

                            {/* Profile */}
                            <SubMenu
                                label={
                                    <p className="flex flex-col">
                                        <span className="">
                                            {user.first_name} {user.last_name}
                                        </span>
                                        <span className="text-xs">
                                            Account settings
                                        </span>
                                    </p>
                                }
                                icon={
                                    <img
                                        src={`data:image/png;base64,${
                                            user.picture ?? ""
                                        }`}
                                        alt="User"
                                        className="rounded-full w-8 h-8 object-cover"
                                    />
                                }
                            >
                                <MenuItem>...</MenuItem>
                                <MenuItem>...</MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </Sidebar>
            <main>
                {broken && (
                    <button
                        className="p-1 absolute"
                        onClick={() => setToggled(!toggled)}
                    >
                        <Icon path={mdiMenu} size={1}></Icon>
                    </button>
                )}
            </main>
        </div>
    );
};

export default SidebarComponent;

