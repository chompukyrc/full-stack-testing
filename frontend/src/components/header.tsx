import Icon from "@mdi/react";
import { mdiUnfoldMoreVertical } from "@mdi/js";

const Header = () => {
    return (
        <div>
            <div
                className="h-screen w-[300px] bg-[#081028] border-r border-[#0B1739] p-7 "
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
                <div></div>
            </div>
        </div>
    );
};
export default Header;

