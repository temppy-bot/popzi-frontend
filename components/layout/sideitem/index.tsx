import Button from '@/components/utitlies/button';
import Divider from '@/components/utitlies/divider';
import ProgressBar from '@/components/utitlies/progressbar';
import { menuItems } from '@/utilies/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void
}

const SidebarItem: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            <motion.div
                className='w-full'
                initial={{ width: '60px' }}
                animate={{ width: isOpen ? '250px' : '60px' }}
                transition={{ duration: 0.5 }}
            >
                <div className={`flex ${isOpen ? "justify-between" : "justify-center"} w-full items-center`}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isOpen && (
                            <h1 className='text-2xl font-extrabold leading-8 font-fpublic'>POPZI</h1>
                        )}
                    </motion.div>
                    <button className='w-auto h-auto' onClick={toggleSidebar}>
                        <Image
                            src="/open.png"
                            alt="Toggle Sidebar"
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
                    </button>
                </div>
                <Divider />
                <div className='mt-4 md:w-[90%] w-full'>
                    <Button
                        bg={isOpen ? "bg-bggrey" : "bg-transparent"}
                        imagePath="/johndoe.png"
                        showRightIcon={true}
                        lgH={true}
                        text="John Doe"
                        isOpen={isOpen}
                        isNormal={true}
                    />
                </div>

                <div className="mt-4 flex flex-col gap-4">
                    <div className="mt-4 flex flex-col gap-4">
                        {menuItems.map((item, index) => {
                            const isActive = currentPath === item.link;
                            return (
                                <Link href={item.link} key={index}>
                                    <div className='md:w-[90%] w-full'>
                                        <Button
                                            bg="bg-btnbg"
                                            imagePath={isActive ? item?.iconActive : item.icon}
                                            showRightIcon={false}
                                            lgH={false}
                                            text={item.name}
                                            isOpen={isOpen}
                                            isActive={isActive}
                                            isNormal={false}
                                            color={isActive ? "text-white" : "text-textblack"}
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <Divider />
                <div className='mt-4 md:w-[90%] w-full'>
                    <Button
                        bg={isOpen ? "bg-bggrey" : "bg-transparent"}
                        imagePath="/love.png"
                        showRightIcon={false}
                        lgH={false}
                        text="You have 1032 Pops!"
                        isOpen={isOpen}
                        isNormal={true}
                    />
                </div>
            </motion.div>

            <div className='w-full mb-4 flex flex-col gap-4'>
                <motion.div
                    className='w-[95%] p-3 h-auto flex flex-col gap-3 border rounded-[0.985rem] border-bgd'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isOpen && (
                        <>
                            <p className='text-lighterblack text-xs font-circular font-normal leading-[0.875]'>
                                Basic <span className='text-lightergreen'>(Free)</span>
                            </p>
                            <ProgressBar progress={10} />
                            <p className='text-lightgreen text-xs font-circular font-normal leading-[0.875]'>
                                1 of 300 questions used
                            </p>
                        </>
                    )}
                    <div className='w-full mt-2'>
                        <Button
                            bg={isOpen ? "bg-lightblack" : "bg-lightblack"}
                            imagePath="/premium.png"
                            showRightIcon={true}
                            lgH={false}
                            text="English"
                            isOpen={isOpen}
                            isNormal={true}
                            color="text-lightwhite"
                        />
                    </div>
                </motion.div>

                <Button
                    bg={isOpen ? "bg-bggrey" : "bg-transparent"}
                    imagePath="/search.png"
                    showRightIcon={true}
                    lgH={false}
                    text="English"
                    isOpen={isOpen}
                    isNormal={true}
                    color="text-textblack"
                />
            </div>
        </>
    );
};

export default SidebarItem;