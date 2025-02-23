import Icon from "@mdi/react";
import { mdiTimer, mdiArrowTopRight } from "@mdi/js";

const Dashboard1Bottom: React.FC = () => {
    return (
        <div className=" w-full flex p-6 flex-col justify-between h-full">
            <div>
                <div className=" flex items-center text-xs text-[#AEB9E1] gap-1">
                    <Icon path={mdiTimer} size={0.5}></Icon>
                    <p>Total sessions</p>
                </div>
                <div className="justify-start items-center gap-1.5 inline-flex">
                    <div className="text-white text-2xl leading-loose">400</div>
                    <div
                        className={`text-[10px] text-[#14CA74] border-[#14CA74] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[#05c168] rounded-sm`}
                    >
                        16.8%
                        <Icon path={mdiArrowTopRight} size={0.5}></Icon>
                    </div>
                </div>
            </div>
            {/* graph */}
            <div className="w-[312.63px] h-[93.36px] relative mx-auto">
                <div className="w-[320.13px] h-[103.47px] relative">
                    <div className="w-[320.13px] h-[90px] left-0 top-0 absolute">
                        <div
                            data-svg-wrapper
                            className="left-[24.84px] top-[9px] absolute"
                        >
                            <svg
                                width="296"
                                height="74"
                                viewBox="0 0 296 74"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.0950928 73.2471L295.389 73.247"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                />
                                <path
                                    d="M0.0950928 49.2471L295.389 49.247"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                />
                                <path
                                    d="M0.0950928 25.2471L295.389 25.247"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                />
                                <path
                                    d="M0.0950928 1.24707L295.389 1.24704"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                />
                                <path
                                    d="M69.9136 73.2471L69.9136 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                                <path
                                    d="M15.9996 73.2471L15.9996 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                                <path
                                    d="M123.826 73.2471L123.826 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                                <path
                                    d="M177.74 73.2471L177.74 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                                <path
                                    d="M231.652 73.2471L231.652 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                                <path
                                    d="M285.566 73.2471L285.566 1.24707"
                                    stroke="#0B1739"
                                    stroke-width="0.6"
                                    stroke-dasharray="5 5"
                                />
                            </svg>
                        </div>
                        <div className="w-[5.12px] left-[9.22px] top-[78px] absolute text-right text-[#adb9e1] text-[8px] font-medium leading-3">
                            0
                        </div>
                        <div className="w-[13.31px] left-[2.05px] top-[52px] absolute text-right text-[#adb9e1] text-[8px] font-medium leading-3">
                            100
                        </div>
                        <div className="w-[15.36px] left-0 top-[26px] absolute text-right text-[#adb9e1] text-[8px] font-medium leading-3">
                            250
                        </div>
                        <div className="w-[15.36px] left-0 top-0 absolute text-right text-[#adb9e1] text-[8px] font-medium leading-3">
                            500
                        </div>
                    </div>
                    <div
                        data-svg-wrapper
                        className="left-[24.84px] top-[17.22px] absolute"
                    >
                        <svg
                            width="297"
                            height="65"
                            viewBox="0 0 297 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.09509 64.2471L20.8427 57.9087C21.044 57.8441 21.2196 57.7174 21.3443 57.5468L33.3505 41.1257C33.6775 40.6784 34.3059 40.5823 34.7517 40.9114L53.2957 54.6012C53.7517 54.9378 54.3961 54.8285 54.7156 54.3603L67.938 34.9844C68.2491 34.5285 68.8708 34.4109 69.3269 34.7216L87.8523 47.3388C87.9527 47.4071 88.0646 47.4566 88.1826 47.4849L120.061 55.1105C120.345 55.1784 120.645 55.1188 120.881 54.9473L146.679 36.2306C146.795 36.1465 146.891 36.0386 146.962 35.9141L166.163 2.0177C166.548 1.33812 167.529 1.34243 167.908 2.02537L198.577 57.2945C198.753 57.6122 199.088 57.8093 199.451 57.8093H234.045C234.303 57.8093 234.551 57.7095 234.737 57.5307L258.298 34.9118C258.72 34.5067 259.398 34.5488 259.767 35.003L276.025 55.0321C276.124 55.154 276.25 55.2509 276.394 55.3149L296.389 64.2471"
                                stroke="#CB3CFF"
                                stroke-width="1.2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                    <div className="w-[285.69px] h-3 left-[32.84px] top-[91.47px] absolute justify-between items-start inline-flex">
                        {["12 AM", "8 AM", "4 PM", "11 PM"].map(
                            (time, index) => (
                                <div
                                    key={index}
                                    className="text-[#adb9e1] text-[8px] font-medium leading-3"
                                >
                                    {time}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full text-xs ">
                <div className="text-[#AEB9E1] flex items-center gap-2">
                    <div
                        className={`text-[10px] items-center gap-1 text-[#14CA74] border-[#14CA74] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[#05c168] rounded-sm`}
                    >
                        <div className="w-[3px] h-[3px] bg-[#14CA74] rounded-full" />
                        <p>Live</p>
                    </div>
                    10k visitors
                </div>
                <div className=" text-[#CB3CFF]">View report</div>
            </div>
        </div>
    );
};
export default Dashboard1Bottom;

