import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiCalendarBlank, mdiChevronDown } from "@mdi/js";

const Dashboard1Left: React.FC = () => {
    return (
        <div className=" w-full p-10">
            <div className="flex justify-between w-full">
                <div>
                    <div className="w-[150px] h-14 relative ">
                        <div className="left-[1.23px] top-0 absolute text-[#adb9e1] text-sm font-medium leading-[14px]">
                            Total revenue
                        </div>
                        <div className="h-8 left-0 top-[24px] absolute justify-start items-center gap-1.5 inline-flex">
                            <div className="text-white text-2xl font-semibold leading-loose">
                                $240.8K
                            </div>
                            <div
                                className={`text-[10px] text-[#14CA74] border-[#14CA74] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[#05c168] rounded-sm`}
                            >
                                24.6%
                                <Icon path={mdiArrowTopRight} size={0.5}></Icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-xs text-[#adb9e1] flex space-x-5 items-center">
                    <div className=" space-x-6">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-[7px] h-[7px] bg-[#cb3cff] rounded-[80px]" />
                            <div>Revenue</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-[7px] h-[7px] bg-[#00c1ff] rounded-[80px]" />
                            <div>Expenses</div>
                        </div>
                    </div>
                    <div className=" p-[9px] flex items-center gap-2 bg-[#0A1430] h-fit rounded">
                        <Icon path={mdiCalendarBlank} size={0.5}></Icon>
                        <p className="text-[10px]">9 Jan 2024 - Dec 2024</p>
                        <Icon path={mdiChevronDown} size={0.5}></Icon>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                {/* Scale */}
                <div className="flex flex-row items-end">
                    <div className="h-[356px] flex flex-col justify-start items-end gap-[43px] ">
                        {[
                            "250K",
                            "200K",
                            "150K",
                            "100K",
                            "50K",
                            "25K",
                            "0K",
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="w-full text-right text-[#adb9e1] text-xs font-medium leading-[14px]"
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                    {/* graph */}
                    <div className="w-[548.06px] h-[322.36px] relative ml-4">
                        {/* graph line */}
                        <div
                            data-svg-wrapper
                            className="left-0 top-[70.27px] absolute"
                        >
                            <svg
                                width="548"
                                height="253"
                                viewBox="0 0 548 253"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.2"
                                    d="M109.802 211.975C62.3305 214.511 53.2181 120.557 1.12549 176.571V252.984H547.312V98.3645C432.231 209.862 418.647 0.896302 357.242 0.895752C297.515 0.895217 311.331 170.61 242.077 116.859C166.834 58.4596 169.14 208.804 109.802 211.975Z"
                                    fill="url(#paint0_linear_0_4206)"
                                />
                                <path
                                    d="M1.12549 176.571C53.2181 120.557 62.3305 214.511 109.802 211.975C169.14 208.804 166.834 58.4596 242.077 116.859C311.331 170.61 297.515 0.895217 357.242 0.895752C418.647 0.896302 432.231 209.862 547.312 98.3645"
                                    stroke="#00C2FF"
                                    stroke-linecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_0_4206"
                                        x1="274.219"
                                        y1="0.895752"
                                        x2="274.219"
                                        y2="252.984"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#57C3FF" />
                                        <stop
                                            offset="1"
                                            stop-color="#57C3FF"
                                            stop-opacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            data-svg-wrapper
                            className="left-0 top-[2.36px] absolute"
                        >
                            <svg
                                width="548"
                                height="322"
                                viewBox="0 0 548 322"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.2"
                                    d="M112.077 249.655C85.3763 298.865 26.984 317.712 1.12549 320.984H547.312V0.984375C411.104 0.984375 361.943 149.533 265.875 142.989C169.807 136.445 145.452 188.142 112.077 249.655Z"
                                    fill="url(#paint0_linear_0_4209)"
                                />
                                <path
                                    d="M1.12549 320.984C26.984 317.712 85.3763 298.865 112.077 249.655C145.452 188.142 169.807 136.445 265.875 142.989C361.943 149.533 411.104 0.984375 547.312 0.984375"
                                    stroke="#CB3CFF"
                                    stroke-linecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_0_4209"
                                        x1="274.219"
                                        y1="0.984375"
                                        x2="274.219"
                                        y2="320.984"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#575DFF" />
                                        <stop
                                            offset="1"
                                            stop-color="#575DFF"
                                            stop-opacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        {/* description */}
                        <div className="absolute w-[145.45px] h-[63.51px] left-[160px] top-[60px] shadow-lg flex flex-col justify-center items-center">
                            <div>
                                <div className=" justify-start items-center gap-1.5 flex">
                                    <div className="text-white text-base">
                                        $125.2k
                                    </div>
                                    <div
                                        className={`text-[10px] items-center text-[#14CA74] border-[#14CA74] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[#05c168] rounded-sm`}
                                    >
                                        12.5%
                                        <Icon
                                            path={mdiArrowTopRight}
                                            size={0.5}
                                        ></Icon>
                                    </div>
                                </div>
                                <div className=" text-[10px] text-[#adb9e1]">
                                    June 21, 2023
                                </div>
                            </div>
                        </div>
                        {/* point */}
                        <div className="w-[13px] h-[13px] left-[244.42px] top-[150px] absolute origin-top-left rotate-180 bg-[#0b1739] rounded-full border border-[#cb3cff]" />
                        <div className="w-[5px] h-[5px] left-[543.06px] top-0 absolute bg-[#cb3cff] rounded-full" />
                        <div className="w-[5px] h-[5px] left-[543.06px] top-[165.50px] absolute bg-[#00c1ff] rounded-full" />
                    </div>
                </div>
                {/* Month */}
                <div className="flex ">
                    <div className="w-[510px] h-3.5 justify-between items-center inline-flex ml-14 mt-6">
                        {[
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ].map((month, index) => (
                            <div
                                key={index}
                                className="text-center text-[#adb9e1] text-[10px] leading-[14px]"
                            >
                                {month}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard1Left;

