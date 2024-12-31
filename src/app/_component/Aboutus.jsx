import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Aboutus({ activepage = "about" }) {
    return (
        <>
            <Wrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <section>
                        <h1 className='text-4xl md:text-5xl pb-4'>About Us</h1>
                        <p className='text-justify'>Aimed with an invaluable legacy, contemporary approach and cutting-edge technology, KAAL TOOLS stands committed to always delivering products of Impeccable Quality to each of its valuable customers with customer satisfaction being a top priority.<br />
                            Established in the year 1982, KAAL TOOLS is a third-generation family-run business started under the leadership of Sardar Tarlok Singh Kapoor. Our company's manufacturing facility & headquarters are located in Gurugram, Haryana (INDIA) and are a leading supplier of Engineering Tools & Industrial Supplies serving the international market for the last 42 years.</p>
                        {activepage === "about" && (<p className='text-justify'>Understanding the importance of a robust infrastructure, KAAL TOOLS has a well-established state-of-the-art facility that is spread across 10000 sq ft. The facility has high production capacity and is managed by a professional team of skilled and experienced workforce. We are always committed to delivering products of Impeccable Quality to each of our valuable customers. To ensure this, a separate quality control department is set up where all the tools are checked at all stages of production on various well-defined parameters.<br />
                            Since inception, our commitment towards meeting the expectations of our customers has helped in gaining a vast clientele all across the world. We take pride in our ability to go that extra mile by providing several value-added services and standing behind every product sold.
                            Keeping this in mind, we do our best to comprehend every requirement of our clients and even customize/develop new tools as per samples/drawings. We consider this approach to be an investment in the future of our customers and focus on long-term commitments with them to enhance operational synergies and global competitiveness.</p>)}
                        {activepage === "home" && (<button className='mt-8'><Link href="/about" className=' py-3 px-8 text-white bg-[var(--maincolor)] rounded-lg' >View More</Link></button>)}

                    </section>
                    <section className='relative flex items-center'>
                        <Image alt='about image' height={400} width={600} src='/abs.webp' />
                        <div className={`p-6 absolute bg-[var(--maincolor)] rounded-lg text-white text-lg left-2 bottom-[-80px]   ${activepage === "about" ? 'hidden' : 'flex lg:flex md:hidden lg:bottom-2 lg:left-[-80px]'}`}>
                            15+ Years <br />Experience
                        </div>
                    </section>
                </div>

            </Wrapper>
        </>
    )
}
