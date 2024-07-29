import Image from 'next/image';
import React from 'react'
import Logo from '/public/writesonic-logo.webp'
import { IoIosArrowDown } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='flexAround h-20 w-full pt-5 pb-5'>
            <div className="">
                <div className="flexCenter gap-2">
                    <div className="flexCenter mr-8">
                        <Image src={Logo} alt='Write Sonic Logo' className='w-auto h-10 sm:h-14' />
                        <p className='text-base sm:text-xl'>Writesonic</p>
                    </div>
                    <div className=" hidden lg:inline">
                        <ul className='flex gap-5 items-center font-[400]'>
                            <Link href='#' className='flex items-center gap-1.5'>Features <span><IoIosArrowDown /></span></Link>
                            <Link href='#' className='flex items-center gap-1.5'>Resources <span><IoIosArrowDown /></span></Link>
                            <Link href='#'>Chatsonic</Link>
                            <Link href='#'>Botsonic</Link>
                            <Link href='#'>Acedemy</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flexCenter gap-4 font-[200] sm:font-[500]">
                <button className='py-2 px-2 max-sm:text-sm sm:px-4 '>Sign in</button>
                <button className='py-2 px-2 max-sm:text-sm sm:px-4 rounded-full border-[0.5px] border-gray-400'>Get Started</button>
                <button className=' lg:hidden inline'><FaHamburger size={25}/></button>
            </div>
        </header>
    )
}
