import React from "react";
import Header from "./header";

import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;

