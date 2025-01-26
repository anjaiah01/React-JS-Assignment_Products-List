import React, { useEffect, useState } from 'react';
import hover from '../assets/hover.svg';
import love from '../assets/love.svg';
import redlove from '../assets/redlove.svg';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                // Add `liked` property to each product
                const updatedData = data.map(product => ({ ...product, liked: false }));
                setProducts(updatedData);
            } catch {
                console.log("Error while fetching data");
            }
        };
        fetchData();
    }, []);

    const clickLike = (productId) => {
        setProducts(products.map(product => 
            product.id === productId 
                ? { ...product, liked: !product.liked } 
                : product
        ));
    };

    return (
        <div className='mt-20'>
            <div className='flex flex-col gap-3 text-center'>
                <p className='text-5xl'>DISCOVER OUR PRODUCTS</p>
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Amet est posuere rhoncus <br />scelerisque. 
                    Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
            <hr className='mt-5 w-full' />
            <div className='flex flex-row justify-between mt-4 mb-4'>
                <div className='flex flex-row gap-18'>
                    <p>34567 ITEMS</p>
                    <a>SHOW FILTER</a>
                </div>
                <div>
                    <div className='flex flex-row gap-2'>
                        <p>RECOMMENDED</p>
                        <img src={hover} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            {/* Products and Filters */}
            <div className='flex flex-row mt-10 mr-40'>
                {/* left side filters */}
                <div className='flex flex-col basis-2/10 bg-blue-500'>
                    <div>
                        <checkbox></checkbox>
                        <p>CUSTOMIZABLE</p>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <p>IDEAL FOR</p>
                            <div className='group relative'>
                                <img src={hover} alt=""/>
                                <div className='flex flex-col hidden group-hover:block absolute left-0 top-10'>
                                    <p>Men</p>
                                    <p>Men</p>
                                    <p>Men</p>
                                </div>
                            </div>
                        </div>
                        <p>All</p>
                    </div>

                    
                </div>
                {/* right side producsts showing */}
                <div className='flex flex-row flex-wrap gap-10 w-full bg-red-200/30 ml-5'>
                    {products.map((product) => (
                        <div key={product.id} className='shadow-lg'>
                            <img className='w-50 h-60 mb-5' src={product.image} alt="" />
                            <div className='flex flex-col mt-5'>
                                <p>{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                <div className='flex flex-row gap-3'>
                                    <div className='flex flex-row gap-1'>
                                        <a>Sign in</a>
                                        <p>or</p>
                                        <a>Create an account to see pricing</a>
                                    </div>
                                    <img className='cursor-pointer'
                                        onClick={() => clickLike(product.id)} 
                                        src={product.liked ? redlove : love} 
                                        alt='' 

                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
