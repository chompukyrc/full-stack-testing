import React from "react";
import Icon from "@mdi/react";
import {
    mdiEye,
    mdiAccount,
    mdiPlusCircle,
    mdiStar,
    mdiDotsHorizontal,
    mdiArrowTopRight,
    mdiArrowBottomRight,
} from "@mdi/js";

const cardData = [
    {
        icon: mdiEye,
        title: "Pageviews",
        value: "50.8K",
        percentage: "28.4%",
        percentageIcon: mdiArrowTopRight,
        percentageColor: "#14CA74",
        bgColor: "#05c168",
    },
    {
        icon: mdiAccount,
        title: "Monthly users",
        value: "23.6K",
        percentage: "12.6%",
        percentageIcon: mdiArrowBottomRight,
        percentageColor: "#FF5A65",
        bgColor: "#ff5a65",
    },
    {
        icon: mdiPlusCircle,
        title: "New sign ups",
        value: "756",
        percentage: "3.1%",
        percentageIcon: mdiArrowTopRight,
        percentageColor: "#14CA74",
        bgColor: "#05c168",
    },
    {
        icon: mdiStar,
        title: "Subscriptions",
        value: "2.3K",
        percentage: "11.3%",
        percentageIcon: mdiArrowTopRight,
        percentageColor: "#14CA74",
        bgColor: "#05c168",
    },
];

export const CardStat: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-between">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="h-[100px] rounded-lg border-[#343a4e] border bg-[#0B1739] max-[514px]:w-full w-[250px] p-5 space-y-4 my-2"
                >
                    <div className="flex justify-between">
                        <div className="flex text-[#AEB9E1]">
                            <Icon path={card.icon} size={0.5}></Icon>
                            <p className="ml-2 text-xs">{card.title}</p>
                        </div>
                        <Icon path={mdiDotsHorizontal} size={0.5}></Icon>
                    </div>
                    <div className="flex items-center space-x-[6px]">
                        <div className="text-2xl">{card.value}</div>
                        <div
                            className={`text-[10px] text-[${card.percentageColor}] border-[${card.percentageColor}] border-opacity-[0.2] border-[0.6px] bg-opacity-[0.2] px-1 py-[2px] flex h-fit bg-[${card.bgColor}] rounded-sm`}
                        >
                            {card.percentage}
                            <Icon path={card.percentageIcon} size={0.5}></Icon>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardStat;

