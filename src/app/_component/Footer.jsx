import React from 'react'
import Wrapper from './Wrapper'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone, LuMail } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
    return (
        <div className='w-full bg-gray-100'>
            <Wrapper className='pb-2'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 py-2 '>
                    <section className='flex flex-col gap-2'>
                        <Link href='/'>  <Image src='/logo.webp' width={220} height={60} alt='logo' /></Link>
                        <h2>Your Path to Quality Tools</h2>
                    </section>
                    <section className='flex flex-col gap-2'>
                        <h1 className='text-2xl pb-2 font-medium '>Useful Links</h1>
                        <Link href='/' > <h2>Home</h2></Link>
                        <Link href='/about' > <h2>About</h2></Link>
                        <Link href='/product' > <h2>Products</h2></Link>
                        <Link href='/contact' > <h2>Contact</h2></Link>
                    </section>
                    <section className='flex flex-col gap-2'>
                        <h1 className='text-2xl pb-2 font-medium '>Products</h1>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>LATHE ACCESSORIES</h2></span>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>MILLING ACCESSORIES</h2></span>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>THREAD REPAIRING KITS</h2></span>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>WORKHOLDING </h2></span>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>CUTTING TOOLS</h2></span>
                        <span className='flex items-center gap-2'><IoIosArrowForward color='var(--maincolor)' size={15} /> <h2>HAND TOOLS</h2></span>
                    </section>
                    <section className='flex flex-col gap-4'>
                        <h1 className='text-2xl pb-2 font-medium '>Get in Touch</h1>
                        <h2 className='flex flex-wrap gap-3 items-center'><IoLocationOutline size={25} /> Plot No.164, Udyog Vihar Phase-6,
                            Gurugram - 122004, Haryana (India) </h2>
                        <h2 className='flex  gap-3 items-center'><LuMail size={22} /> hello@domain.com</h2>

                    </section>


                </div>
                <div className='w-full mt-8 text-lg py-4 border-t border-black'>©Kaal Tools 2024 | All Rights Reserved | Designed by <Link href="https://xcelb2b.com/" ><span className='text-blue-600'>Xcel B2B</span></Link> </div>
            </Wrapper>
        </div>
    )
}