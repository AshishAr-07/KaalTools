"use client";



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchProducts } from '@/Api';
import { filteredProducts, setProducts } from '@/ProductSlicer';
import Image from 'next/image';

export default function ProductPage() {
    const dispatch = useDispatch();
    const { filteredProducts: products = [] } = useSelector((state) => state.products || {});
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                dispatch(setProducts(data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, [dispatch]);

    const handleCategory = (category) => {
        setActiveCategory(category);
        dispatch(filteredProducts(category));
    }

    const renderProducts = () => {
        if (!Array.isArray(products)) {
            return <div>No products available</div>;
        }

        return products.map(product => (
            <>
                <Link
                    href={`/product/${product.title}`}
                    key={product.title}
                    className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                    <div className='flex flex-col '>
                        <div className='relative border rounded  hover:shadow-md'>
                            <Image className="w-full h-full object-cover" alt={product.title} width={600} height={500} src={product.image} />
                        </div>
                        <h2 className='pt-5 text-lg px-4'>{product.title}</h2>
                        <h2 className='pt-2 text-lg px-4'>₹{product.price}</h2>
                    </div>
                </Link>
            </>
        ));
    };

    return (
        <>

            <div className="w-full flex gap-8">
                <section className="lg:w-1/5 w-2/5  flex  border-r flex-1  items-center flex-col">
                    <h1 className="md:text-2xl text-lg border-y border-gray-200 flex pl-4  xl:pl-12 w-full sm:justify-start justify-center  py-4">Categories:</h1>
                    <button
                        onClick={() => handleCategory("all")}
                        className={`flex md:text-md text-sm  px-4  xl:pl-12  sm:justify-start justify-center  py-2 w-full hover:bg-[var(--lightcolor)] ${activeCategory === 'all' ? 'bg-[var(--lightcolor)]' : ''}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategory("Material Handling Equipment")}
                        className={`flex md:text-md text-sm  px-4  xl:pl-12  sm:justify-start justify-center py-2 w-full hover:bg-[var(--lightcolor)] ${activeCategory === 'Material Handling Equipment' ? 'bg-[var(--lightcolor)]' : ''}`}
                    >
                       LATHE ACCESSORIES
                    </button>
                    <button onClick={() => handleCategory("Earthmoving Equipment")}
                        className={`flex md:text-md text-sm px-4  xl:pl-12 sm:justify-start justify-center  py-2 w-full hover:bg-[var(--lightcolor)] ${activeCategory === 'Earthmoving Equipment' ? 'bg-[var(--lightcolor)]' : ''}`}>
                        MILLING ACCESSORIES
                    </button>
                    <button onClick={() => handleCategory("Concrete Equipment")}
                        className={`flex flex-wrap md:text-md text-sm px-4  xl:pl-12  sm:justify-start justify-center  py-2 w-full hover:bg-[var(--lightcolor)] ${activeCategory === 'Concrete Equipment' ? 'bg-[var(--lightcolor)]' : ''}`}>
                        THREAD REPAIRING KITS
                    </button>
                    <button onClick={() => handleCategory("Road Surfacing Equipment")}
                        className={`flex flex-wrap md:text-md text-sm px-4  xl:pl-12  sm:justify-start justify-center py-2 w-full hover:bg-[var(--lightcolor)] ${activeCategory === 'Road Surfacing Equipment' ? 'bg-[var(--lightcolor)]' : ''}`}>
                        WORKHOLDING 
                    </button>
                </section>
                <section className="lg:w-4/5 w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8  gap-4">
                    {renderProducts()}
                </section>
            </div>
        </>
    );
}