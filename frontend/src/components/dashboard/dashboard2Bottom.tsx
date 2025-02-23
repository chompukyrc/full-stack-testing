import Icon from "@mdi/react";
import { mdiArrowDown, mdiArrowTopRight } from "@mdi/js";

const Dashboard2Bottom: React.FC = () => {
    const countryData = [
        {
            country: "United States",
            percentage: "30%",
            color: "#cb3cff",
            width: "110px",
        },
        {
            country: "United Kingdom",
            percentage: "20%",
            color: "#7e89ac",
            width: "58px",
        },
        {
            country: "Canada",
            percentage: "20%",
            color: "#9991fa",
            width: "58px",
        },
        {
            country: "Australia",
            percentage: "15%",
            color: "#00c1ff",
            width: "34px",
        },
        {
            country: "Spain",
            percentage: "15%",
            color: "#d9e0f9",
            width: "34px",
        },
    ];

    return (
        <div className="flex">
            <div className="w-1/4">
                <div>
                    <div>Users by country</div>
                    <div className=" flex justify-between items-center">
                        <div className="justify-start items-center gap-1.5 inline-flex">
                            <div className="text-white text-2xl leading-loose">
                                $240.8K
                            </div>
                            <div
                                className={`text-[10px] text-[#14CA74] border-[#14CA74] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[#05c168] rounded-sm`}
                            >
                                28.5%
                                <Icon path={mdiArrowTopRight} size={0.5}></Icon>
                            </div>
                        </div>
                        <button className="p-2 rounded bg-[#0A1330] text-xs flex">
                            Export
                            <Icon path={mdiArrowDown} size={0.6}></Icon>
                        </button>
                    </div>
                </div>
                <div className="space-y-6 text-[#adb9e1] text-xs">
                    {countryData.map(
                        ({ country, percentage, color, width }) => (
                            <div
                                key={country}
                                className="flex justify-between items-center"
                            >
                                <div>
                                    <p className="mb-[6px]">{country}</p>
                                    <div
                                        className="h-[4px]"
                                        style={{
                                            backgroundColor: color,
                                            width: width,
                                        }}
                                    ></div>
                                </div>
                                <div>{percentage}</div>
                            </div>
                        )
                    )}
                </div>
            </div>
            {/* map */}
            <div className="w-3/4 flex justify-center items-center">
                <img src="src/assets/map.svg" className=" w-[75%]" />
            </div>
        </div>
    );
};

export default Dashboard2Bottom;

