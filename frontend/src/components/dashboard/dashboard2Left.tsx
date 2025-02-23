const Dashboard2Left: React.FC = () => {
    return (
        <div className="flex flex-col h-full justify-between">
            {/* top */}
            <div className="flex flex-col justify-center items-center relative">
                <img src="src/assets/pie.svg" className=" w-[250px]" />
                <div className=" absolute top-20">
                    <div className="left-0 top-0 text-white text-4xl">
                        23,648
                    </div>
                    <div className="text-[#7e89ac] text-sm text-center mt-1">
                        Users by device
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className="space-y-7 ">
                {[
                    {
                        color: "#cb3cff",
                        label: "Desktop users",
                        count: "15,624",
                    },
                    {
                        color: "#9991fa",
                        label: "Phone app users",
                        count: "5,546",
                    },
                    {
                        color: "#00c1ff",
                        label: "Laptop users",
                        count: "2,478",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <div className="items-center gap-2 inline-flex">
                            <div
                                className={`w-[7px] h-[7px] bg-[${item.color}] rounded-full`}
                            />
                            <div className="text-[#adb9e1] text-sm">
                                {item.label}
                            </div>
                        </div>
                        <div className="text-[#d9e0f9]">{item.count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard2Left;

