import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <main className='flexCenter h-full w-full pt-20 md:pt-16 pb-24 relative'>
            <div className="relative">
                <h1 className='text-5xl  md:text-7xl text-center md:leading-[1.2] font-bold'>Best AI Writer for Creating <br /> <div className='flex items-center justify-center'> <span className='h1-gradient'>Linkedin Posts</span>
                    <span className="flex flex-col gap-2 items-center">
                        <span className='h-4 w-4 rounded-full glass-effect'></span>
                        <span className='w-0.5 h-7 sm:h-12 bg-white rounded-full bg-[linear-gradient(to_bottom,#e879d9_36%,#753fe0_73%,#4aaced_87%)] inline-flex'></span>
                    </span>
                </div>
                </h1>
                <div className="flexCenter mt-3">
                    <p className='text-center font-light text-base md:text-lg  text-slate-400 max-w-lg'>Create SEO-optimized and plagiarism-free content for your blogs, ads, emails and website 10X faster.</p>
                </div>
                <div className="flexCenter flex-col mt-8">
                    <button className='py-3.5 px-6 font-bold rounded-full bg-[#6e5df6]'>Start Writting for Free</button>
                    <span className='mt-4 text-slate-500 text-sm'>No credit card requried.</span>
                </div>
            </div>
            <div className="absolute top-2 sm:top-[35%] left-5 flexCenter max-sm:gap-1 sm:flex-col">
                <Image className='sm:h-24  h-16 w-16 sm:w-24 imgObject imgSeleted rounded-full mb-2' width={100} height={100} alt='User 1' src="/user1.jpg" />
                <span className='py-2 text-xs font-light px-4 glass-effect rounded-full select-none'>Marketer</span>
            </div>

            <div className="absolute top-[80%] md:top-[70%] left-[10%] md:left-[20%] flexCenter flex-col">
                <Image className='sm:h-24  h-16 w-16 sm:w-24 imgObject imgSeleted rounded-full mb-2' alt='User 1' width={100} height={100} src="/user2.jpg" />
                <span className='py-2 text-xs font-light px-4 glass-effect rounded-full select-none'>Blogger</span>
            </div>
            <div className="absolute top-[59%] md:top-[50%] right-9 flexCenter flex-col">
                <Image className='sm:h-24  h-16 w-16 sm:w-24 imgObject imgSeleted rounded-full mb-2' alt='User 1' width={100} height={100} src="/user3.jpg" />
                <span className='py-2 text-xs font-light px-4 glass-effect rounded-full select-none'>Writter</span>
            </div>
            <div class="absolute -top-20 left-0 circle rounded-full"></div>
        </main>
    )
}
