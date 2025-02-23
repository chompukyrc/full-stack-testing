import Dashboard1Left from "./dashBoard1Left";

const Dashboard1: React.FC = () => {
    return (
        <div className="w-full flex h-[557px]">
            <div className="flex justify-center items-center border-[0.6px] rounded-s-xl border-[#343a4e] w-2/3 bg-[#0B1739] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.40)]">
                <Dashboard1Left />
            </div>
            <div className="w-1/3 rounded-se-xl bg-[#0B1739]">
                <div className="flex justify-center items-center border-l-transparent border-[0.6px] rounded-se-xl border-[#343B4F] h-1/2">
                    top
                </div>
                <div className="flex justify-center items-center border border-[#0b1739] bg-[#0b1739] h-1/2">
                    down
                </div>
            </div>
        </div>
    );
};
export default Dashboard1;

