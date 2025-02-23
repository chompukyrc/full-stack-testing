import Icon from "@mdi/react";
import { mdiChartLine, mdiArrowTopRight } from "@mdi/js";

const Dashboard1Top: React.FC = () => {
    return (
        <div className=" w-full flex p-6 flex-col justify-between h-full">
            <div>
                <div className=" flex items-center text-xs text-[#AEB9E1] gap-1">
                    <Icon path={mdiChartLine} size={0.5}></Icon>
                    <p>Total profit</p>
                </div>
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
            </div>
            {/* graph */}
            <div className="w-[312.63px] h-[93.36px] relative mx-auto">
                <div className="w-[312.63px] h-[75.03px] left-0 top-0 absolute ">
                    <div data-svg-wrapper className="left-0 top-0 absolute">
                        <svg
                            width="314"
                            height="77"
                            viewBox="0 0 314 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.755371 76.0488L313.389 76.0488"
                                stroke="#0B1739"
                                stroke-width="0.6"
                            />
                            <path
                                d="M0.755371 51.0488L313.389 51.0488"
                                stroke="#0B1739"
                                stroke-width="0.6"
                            />
                            <path
                                d="M0.755371 26.0488L313.389 26.0488"
                                stroke="#0B1739"
                                stroke-width="0.6"
                            />
                            <path
                                d="M0.755371 1.04883L313.389 1.04879"
                                stroke="#0B1739"
                                stroke-width="0.6"
                            />
                            <path
                                d="M115.756 76.0801L115.756 1.04883"
                                stroke="#0B1739"
                                stroke-width="0.6"
                                stroke-dasharray="5 5"
                            />
                            <path
                                d="M22.2563 76.0801L22.2564 1.04883"
                                stroke="#0B1739"
                                stroke-width="0.6"
                                stroke-dasharray="5 5"
                            />
                            <path
                                d="M207.756 76.0801L207.756 1.04883"
                                stroke="#0B1739"
                                stroke-width="0.6"
                                stroke-dasharray="5 5"
                            />
                            <path
                                d="M299.933 76.0801L299.933 1.04883"
                                stroke="#0B1739"
                                stroke-width="0.6"
                                stroke-dasharray="5 5"
                            />
                        </svg>
                    </div>
                    <div className="w-[283.59px] h-[59.11px] left-[19.75px] top-[15.92px] absolute">
                        <div className="w-[4.17px] h-[50.17px] left-0 top-[8.92px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[41.25px] left-[11.17px] top-[17.84px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[50.17px] left-[22.33px] top-[8.92px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[31.49px] left-[33.50px] top-[27.59px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[45.43px] left-[44.67px] top-[13.66px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[14.59px] left-[55.83px] top-[44.52px] absolute origin-top-left rotate-[-0.64deg] bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[41.25px] left-[67.25px] top-[17.84px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[59.09px] left-[78.42px] top-0 absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[50.17px] left-[89.59px] top-[8.92px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-9 left-[100.75px] top-[23.13px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[59.09px] left-[111.92px] top-0 absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[43.20px] left-[123.09px] top-[15.89px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[51.56px] left-[134.26px] top-[7.52px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[25.36px] left-[145.42px] top-[33.72px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[42.85px] left-[156.59px] top-[16.23px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[32.82px] left-[167.76px] top-[26.27px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[51.91px] left-[178.92px] top-[7.18px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[42.85px] left-[190.09px] top-[16.23px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[30.87px] left-[201.26px] top-[28.22px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[56.16px] left-[212.42px] top-[2.92px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[40.34px] left-[223.59px] top-[18.74px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[46.40px] left-[234.76px] top-[12.68px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[27.59px] left-[245.93px] top-[31.49px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[52.26px] left-[257.09px] top-[6.83px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-11 left-[268.26px] top-[15.05px] absolute bg-[#cb3cff] rounded-tl-[1px] rounded-tr-[1px]" />
                        <div className="w-[4.17px] h-[55.81px] left-[279.43px] top-[3.27px] absolute bg-[#00c1ff] rounded-tl-[1px] rounded-tr-[1px]" />
                    </div>
                </div>
                <div className="h-3 left-[10px] top-[81.36px] absolute justify-start items-start gap-[72px] inline-flex">
                    {["12 AM", "8 AM", "4 PM", "11 PM"].map((time, index) => (
                        <div
                            key={index}
                            className="text-[#adb9e1] text-[8px] font-medium leading-3"
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center w-full text-xs ">
                <div className="text-[#AEB9E1]">Last 12 months</div>
                <div className=" text-[#CB3CFF]">View report</div>
            </div>
        </div>
    );
};
export default Dashboard1Top;

