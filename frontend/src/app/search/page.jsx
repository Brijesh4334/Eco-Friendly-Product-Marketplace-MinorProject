'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const Search = () => {

    const [productData, setProductData] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/product/getall");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            // const data = await res.json();
            console.log(data);
            setProductData(data)
        }
    };
    useEffect(() => {
        fetchProduct();
    }, []);

    const searchProduct = (e) => {
        const value = e.target.value;
        setProductData(productData.filter(productData => productData.title.toLowerCase().includes(value.toLowerCase())))
    }

    const displayProducts = () => {
        return productData.map(product => (
            <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                <div className="relative w-full h-48">
                    <img
                        src={product.image}
                        className="object-cover w-full h-full rounded-t"
                        alt="Plan"
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                        <div className="text-lg font-semibold">{product.brand}</div>
                        <p className="text-sm text-gray-900">
                            {product.title}
                        </p>
                        <p className="text-sm text-gray-900">
                            {product.price}
                        </p>
                        <p className="text-sm text-gray-900">
                            {product.category}
                        </p>

                        <div className="mt-1 mb-4 mr-1 text-2xl font-bold sm:text-5xl">

                        </div>
                    </div>
                    <Link
                        href={"/viewproduct/" + product._id}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        ))
    }

    return (
        <>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
                    <div className="text-center">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Brand new
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="b039bae0-fdd5-4311-b198-8557b064fce0"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative"></span>
                                </span>{' '}
                                    Eco-Friendly And Sustainable Products
                            </h2>
                            <p className="text-base text-black-700 md:text-lg">
                               Join the Movement towards a Greener Future..!!
                            </p>
                        </div>
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                            <input
                                placeholder="Search Products"
                                onChange={searchProduct}
                                required=""
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

                <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

                    {displayProducts()}
                </div>
            </div>
        </>
    );
};

export default Search;