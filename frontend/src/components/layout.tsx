import React from "react";
import Sidebar from "./sideBar";

import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;

