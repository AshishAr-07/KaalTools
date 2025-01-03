'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '@/Api'
import { Loader2Icon } from 'lucide-react'
import Wrapper from './Wrapper'


export default function Product({ activepage = "product" }) {

  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  const FeaturedProduct = activepage == "homepage" ? Data.slice(0, 8) : Data;
  useEffect(() => {
    const Products = async () => {
      const data = await fetchProducts();
      setData(data);
      setLoading(false)

    }
    Products()
  }, [])

  return (
    <>
      <Wrapper>
        <span className='w-full pb-12 flex flex-col justify-center items-center '><h1 className='text-4xl md:text-5xl '>{activepage === "homepage" ? "Our Products" : ""} </h1>
          {activepage === "homepage" && <div className='bg-[var(--maincolor)] w-32 h-1 rounded-full mt-2 '></div>}</span>
        {Loading && (<div className="flex justify-center items-center w-full h-screen">
          <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg font-medium">Loading...</span>
        </div>)}
        <div className='grid relative grid-cols-1 sm:grid-cols-2 md:px-4 lg:grid-cols-4 gap-8'>
          {FeaturedProduct.map((items, index) => (
            <Link className="border rounded-lg p-2  hover:shadow-lg transition-shadow" key={index} href={`/product/${items.title}`}>
              <div className='flex flex-col pb-3 '>
                <div className='relative border-b'>
                  <Image className="w-full h-full  object-cover" alt={items.title} width={600} height={500} src={items.image} />
                </div>
                <h2 className='pt-5 px-4'>{items.title}</h2>
                <h2 className='pt-2 px-4'>₹{items.price}</h2>
              </div></Link>
          ))}
        </div>
        {activepage === "homepage" &&
          (<div className='w-full text-center pt-8'><Link href='/product' ><button className="bg-[var(--maincolor)] text-white border-0 mt-3 py-3 px-8 rounded-lg  ">View All Products</button></Link></div>)
        }
      </Wrapper>
    </>
  )
}
