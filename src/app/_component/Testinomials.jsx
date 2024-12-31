'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Wrapper from './Wrapper';

const testimonials = [
    {
        name: "Rajan Mehra",
        role: "CEO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/user.png"
    },
    {
        name: "Rudra Pratap",
        role: "CTO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. ",
        image: "/user.png"
    },
    {
        name: "Tarun Singh",
        role: "COO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. ",
        image: "/user.png"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }
    }, [isTransitioning]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    useEffect(() => {
        const handleTransitionEnd = () => {
            setIsTransitioning(false);
        };

        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('transitionend', handleTransitionEnd);
        }

        return () => {
            if (slider) {
                slider.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, []);

    return (
        <>
            <section className='max-w-screen-xl mx-auto pt-8'>
            <div className="mb-4 md:mb-4 flex flex-col items-center justify-center">
                    <h2 className="text-4xl md:text-5xl tracking-tight leading-tight">
                       What Our Clients Says ?
                    </h2>
                    <div className='bg-[var(--maincolor)] w-48 h-1 rounded-full mt-2 '></div>
                </div>
            </section>
            <div className="relative w-full overflow-hidden">
                <Wrapper className='py-8'>
                    <div
                        ref={sliderRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full md:px-20 flex-shrink-0">
                                <div className="bg-white rounded-lg shadow-xl p-8 mx-4 md:mx-8 lg:mx-16 text-center">
                                    <Image
                                        width={96}
                                        height={96}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                                    />
                                    <p className="text-gray-600 text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrapper>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-3 rounded-full focus:outline-none transition duration-300 ease-in-out"
                    aria-label="Previous testimonial"
                    disabled={isTransitioning}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-3 rounded-full focus:outline-none transition duration-300 ease-in-out"
                    aria-label="Next testimonial"
                    disabled={isTransitioning}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Testimonial;

