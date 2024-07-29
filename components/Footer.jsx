import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='flex justify-between items-center h-full w-full pl-6 pr-5 py-8 '>
            <div className="">
                <p className='text-white text-sm'>Build by Bulbul</p>
            </div>
            <div className="">
                <p className='text-sm text-slate-300'>All Rights Reserved</p>
            </div>
            <div className="flex gap-3 items-center">
                <a href=''><FaFacebook size={17} /></a>
                <a href='https://www.linkedin.com/in/webdevwithbulbul/' target='_blank'><FaLinkedin size={17} /></a>
                <a href='https://github.com/bulbul32123' target='_blank'><FaGithub size={17} /></a>
            </div>
        </div>
    )
}
