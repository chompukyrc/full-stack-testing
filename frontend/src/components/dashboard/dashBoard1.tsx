import Dashboard1Left from "./dashBoard1Left";
import Dashboard1Top from "./dashboard1Top";
import Dashboard1Bottom from "./dashboard1Bottom";
import CardStat from "./cardStat";

const Dashboard1: React.FC = () => {
    return (
        <div>
            <div className="mb-3">
                <CardStat />
            </div>
            <div className="w-full flex xl:h-[557px] max-xl:flex-col">
                <div className="xl:w-[65%] w-full flex justify-center items-center border-[0.6px] xl:rounded-s-xl max-xl:rounded-t-xl border-[#343a4e] bg-[#0B1739] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.40)]">
                    <Dashboard1Left />
                </div>
                <div className="xl:w-[35%] w-full rounded-se-xl bg-[#0B1739] flex flex-row xl:flex-col max-md:flex-col">
                    <div className="flex max-xl:w-1/2 max-md:w-full justify-center items-center xl:border-l-transparent max-xl:border-t-transparent border-[0.6px] xl:rounded-se-xl rounded-bl-xl border-[#343a4e] h-1/2">
                        <Dashboard1Top />
                    </div>
                    <div className="flex max-xl:w-1/2 max-md:w-full justify-center items-center border border-[#0b1739] bg-[#0b1739] max-xl:rounded-br-xl h-1/2">
                        <Dashboard1Bottom />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard1;

