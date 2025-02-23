import Dashboard2Left from "./dashboard2Left";
import Dashboard2Right from "./dashboard2Right";
import Dashboard2Bottom from "./dashboard2Bottom";

const Dashboard2: React.FC = () => {
    return (
        <div className="w-full gap-5 flex flex-col">
            <div className=" h-[392px] gap-5 flex">
                <div className="w-1/2 h-full rounded-xl bg-[#0B1739] p-6">
                    <Dashboard2Left />
                </div>
                <div className="w-1/2 h-full rounded-xl bg-[#0B1739]">
                    <Dashboard2Right />
                </div>
            </div>
            <div className="w-full h-[351px] rounded-xl bg-[#0B1739] p-6">
                <Dashboard2Bottom />
            </div>
        </div>
    );
};
export default Dashboard2;

