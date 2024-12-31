'use client'
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Wrapper from './Wrapper';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = useCallback(() => setIsMenuOpen(prev => !prev), [])
    const menuClick = useCallback(() => {
        setIsMenuOpen(false)
    },[])

    return (
        <header className='w-full bg-[var(--lightcolor)]   sticky top-0 left-0 right-0 z-50 '>
            <section className='md:max-w-screen-xl max-w-screen-lg  mx-auto py-2 lg:px-0 px-4'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src='/logo.webp' width={220} height={80} alt='logo' />
                    </Link>
                    <nav className='md:flex hidden '>
                        <ul className='flex  text-lg font-extralight gap-10'>
                            <Link href="/" className='hover:underline hover:text-[var(--maincolor)] ' ><li>Home </li></Link>
                            <Link href="/about" className='hover:underline hover:text-[var(--maincolor)]  ' ><li>About </li></Link>
                            <Link href="/product" className='hover:underline hover:text-[var(--maincolor)] ' ><li>Product </li></Link>
                            <Link href="/contact" className='hover:underline hover:text-[var(--maincolor)] ' ><li>Contact </li></Link>
                            
                        </ul>
                    </nav>

                    {/* Mobile navbar */}
                    <nav className='md:hidden'>
                        <button onClick={handleClick}>{isMenuOpen ? <RxCross2 size={35} /> : <RxHamburgerMenu size={35} />}</button>
                    </nav>
                   
                </div>
            </section>
            {isMenuOpen && (
                <div className='absolute w-full bg-white  '>
                    <Wrapper className='py-4'>
                        <ul className='flex flex-col text-lg gap-5'>
                            <Link className='hover:underline hover:text-[var(--maincolor)]' onClick={menuClick} href="/" ><li>Home </li></Link>
                            <Link className='hover:underline hover:text-[var(--maincolor)]' onClick={menuClick} href="/about" ><li>About </li></Link>
                            <Link className='hover:underline hover:text-[var(--maincolor)]' onClick={menuClick} href="/product" ><li>Product </li></Link>
                            <Link className='hover:underline hover:text-[var(--maincolor)]' onClick={menuClick} href="/contact" ><li>Contact </li></Link>
                        </ul>
                    </Wrapper>
                </div>
            )
            }
        </header>
    )
}