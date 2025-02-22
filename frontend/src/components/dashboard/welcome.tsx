import { useUserStore } from "../../stores/user.store";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";

export const Welcome: React.FC = () => {
    const user = useUserStore((state) => state.user);
    return (
        <div className=" flex justify-between">
            <div>
                <p className=" text-2xl">Welcome back, {user.first_name}</p>
                <p className="text-[#AEB9E1] text-xs">
                    Measure your advertising ROl and report website traffic.
                </p>
            </div>
            <div className=" flex h-fit space-x-3">
                <button className="p-2 rounded bg-[#0A1330] text-xs flex">
                    Export data
                    <Icon path={mdiArrowDown} size={0.6}></Icon>
                </button>
                <button className="p-2 rounded bg-[#4338CA] text-xs">
                    Create report
                </button>
            </div>
        </div>
    );
};
export default Welcome;

