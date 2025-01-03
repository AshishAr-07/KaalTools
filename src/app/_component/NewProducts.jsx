'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '@/Api'
import { Loader2Icon, ExternalLink } from 'lucide-react'
import Wrapper from './Wrapper'

export default function NewProducts() {
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  const FeaturedProduct = Data.slice(0, 4)

  useEffect(() => {
    const Products = async () => {
      const data = await fetchProducts();
      setData(data);
      setLoading(false)
    }
    Products()
  }, [])

  return (
    <div className='w-full bg-gray-100 py-12'>
      <Wrapper>
        <div className='w-full pb-12 flex flex-col justify-center items-center'>
          <h1 className='text-4xl md:text-5xl'>New Arrivals</h1>
          <span className='bg-[var(--maincolor)] w-44 h-1 rounded-full mt-2 '></span>
        </div>
        
        {Loading && (
          <div className="flex justify-center items-center w-full h-screen">
            <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-lg font-medium">Loading...</span>
          </div>
        )}

        <div className='grid relative grid-cols-1 sm:grid-cols-2 md:px-4 lg:grid-cols-4 gap-8'>
          {FeaturedProduct.map((items, index) => (
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative" key={index}>
              {/* Left Side Ribbon */}
              <div className="absolute -left-8 top-0 rotate-[-45deg] bg-red-500 text-white px-8 py-1 shadow-lg z-10">
                <span className="text-sm font-semibold">NEW</span>
              </div>
              
              <div className='relative'>
                <Image 
                  className="transform group-hover:scale-105 transition-transform duration-300" 
                  alt={items.title} 
                  width={300} 
                  height={300} 
                  src={items.image} 
                />
              </div>
              <div className='p-6'>
                <h2 className='text-lg flex items-center justify-center w-full line-clamp-2 mb-2'>{items.title}</h2>
               
                <Link 
                  href={`/product/${items.title}`}
                  className="flex items-center justify-center w-full gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}