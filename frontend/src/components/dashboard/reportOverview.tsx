import Icon from "@mdi/react";
import { mdiArrowDown, mdiCalendarBlank, mdiChevronDown } from "@mdi/js";

const ReportOverview: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className=" text-2xl">Reports overview</p>
                <button className=" flex items-center p-[9px] rounded gap-2 text-[#adb9e1] bg-[#0A1330] border-[0.6px] border-[#0B1739] shadow-sm">
                    <div className="gap-1 flex items-center">
                        <Icon path={mdiCalendarBlank} size={0.8}></Icon>
                        Select date
                    </div>
                    <Icon path={mdiChevronDown} size={0.7}></Icon>
                </button>
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

export default ReportOverview;

