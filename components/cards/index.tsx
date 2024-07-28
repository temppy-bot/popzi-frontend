import React from 'react';
import { format } from 'date-fns';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

interface CardProps {
    date: Date;
    imageUrl: string;
    fileName: string;
}

const Cards: React.FC<CardProps> = ({ date, imageUrl, fileName }) => {
    const formattedDate = format(date, 'MMM dd, yyyy');

    return (
        <div className="flex flex-col  p-4 border rounded-lg">
            <div className="mb-4 font-[400] text-iconcolor font-fpublic  text-sm">{formattedDate}</div>
            <div className="relative mb-4 w-full h-40">
                <Image
                    src={imageUrl}
                    alt={fileName}
                    layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="flex justify-between items-center w-full">
                <span className="text-textblack font-[400] font-fpublic  text-sm">{fileName}</span>
                <Image
                    src="/mage_dots.png"
                    alt="Toggle Sidebar"
                    width={20}
                    height={20}
                    // objectFit='contain'
                />
            </div>
        </div>
    );
};

export default Cards;
