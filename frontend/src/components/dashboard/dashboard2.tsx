import Dashboard2Left from "./dashboard2Left";
import Dashboard2Right from "./dashboard2Right";
import Dashboard2Bottom from "./dashboard2Bottom";

const Dashboard2: React.FC = () => {
    return (
        <div className="w-full gap-5 flex flex-col">
            <div className="h-full gap-5 flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full h-[420px] rounded-xl bg-[#0B1739] p-6">
                    <Dashboard2Left />
                </div>
                <div className="md:w-1/2 w-full h-[420px] rounded-xl bg-[#0B1739]">
                    <Dashboard2Right />
                </div>
            </div>
            <div className="w-full rounded-xl bg-[#0B1739] p-6">
                <Dashboard2Bottom />
            </div>
        </div>
    );
};
export default Dashboard2;

