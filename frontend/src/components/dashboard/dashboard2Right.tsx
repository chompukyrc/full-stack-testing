import Icon from "@mdi/react";
import { mdiCalendarBlank, mdiChevronDown } from "@mdi/js";
import { Check, Minus } from "lucide-react";

const orders = [
    {
        id: "1532",
        date: "Dec 30, 10:06 AM",
        status: "Paid",
        total: 329.4,
        isSelected: true,
    },
    { id: "1531", date: "Dec 29, 2:59 AM", status: "Pending", total: 117.24 },
    { id: "1530", date: "Dec 29, 12:54 AM", status: "Pending", total: 52.16 },
    {
        id: "1529",
        date: "Dec 28, 2:32 PM",
        status: "Paid",
        total: 350.52,
        isSelected: true,
    },
    { id: "1528", date: "Dec 27, 2:20 PM", status: "Pending", total: 246.78 },
    {
        id: "1527",
        date: "Dec 26, 9:48 AM",
        status: "Paid",
        total: 64.0,
        isSelected: true,
    },
];

const Dashboard2Right: React.FC = () => {
    return (
        <div className="pt-6">
            {/* Head */}
            <div className="flex justify-between items-center px-6">
                <p>Recent orders</p>
                <button className="flex text-[10px] items-center p-[9px] rounded gap-2 text-[#adb9e1] bg-[#0A1330] border-[0.6px] border-[#0B1739] shadow-sm">
                    <div className="gap-1 flex items-center">
                        <Icon path={mdiCalendarBlank} size={0.6} />
                        Jan 2024
                    </div>
                    <Icon path={mdiChevronDown} size={0.6} />
                </button>
            </div>
            {/* Table */}
            <div className="w-full p-6 rounded-lg text-[10px]">
                <table className="w-full">
                    <thead>
                        <tr className="text-[#7e89ac]">
                            <th className="text-left pb-4 font-normal">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-sm mr-2 flex items-center justify-center bg-purple-600">
                                        <Minus
                                            size={8}
                                            className="text-white"
                                        />
                                    </div>
                                    Order
                                </div>
                            </th>
                            <th className="text-left pb-4 font-normal">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-sm mr-2 flex items-center justify-center">
                                        <Icon
                                            path={mdiCalendarBlank}
                                            size={0.6}
                                        />
                                    </div>
                                    Date
                                </div>
                            </th>
                            <th className="text-left pb-4 font-normal">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-sm mr-2 flex items-center justify-center bg-[#7e89ac]">
                                        <Check
                                            size={10}
                                            className="text-[#0B1739]"
                                        />
                                    </div>
                                    Status
                                </div>
                            </th>
                            <th className="text-right pb-4 font-normal">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className={`text-gray-300 ${
                                    order.isSelected ? "bg-[#0a1330]" : ""
                                }`}
                            >
                                {/* Order id */}
                                <td className="py-2">
                                    <div className="flex items-center">
                                        <div
                                            className={`w-3 h-3 rounded-sm mr-2 flex items-center justify-center ${
                                                order.isSelected
                                                    ? "bg-purple-600"
                                                    : "border border-gray-600"
                                            }`}
                                        >
                                            {order.isSelected && (
                                                <Check
                                                    size={10}
                                                    className="text-white"
                                                />
                                            )}
                                        </div>
                                        #{order.id}
                                    </div>
                                </td>
                                {/* date */}
                                <td className="py-2">{order.date}</td>
                                {/* status */}
                                <td className="py-2">
                                    <div
                                        className={`rounded-sm flex items-center px-[6px] py-[2px] w-fit ${
                                            order.status === "Paid"
                                                ? "bg-green-900/40 text-green-400"
                                                : "bg-yellow-900/40 text-yellow-400"
                                        }`}
                                    >
                                        <div
                                            className={`w-1 h-1 mr-1 rounded-full ${
                                                order.status === "Paid"
                                                    ? "bg-green-500"
                                                    : "bg-yellow-500"
                                            }`}
                                        />
                                        {order.status}
                                    </div>
                                </td>
                                <td className="py-4 text-right">
                                    $ {order.total.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard2Right;

