import React, { useEffect, useState } from 'react';
import hover from '../assets/hover.svg';
import love from '../assets/love.svg';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [visibilityState, setVisibilityState] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                const updatedData = data.map((product) => ({ ...product, liked: false }));
                setProducts(updatedData);
            } catch {
                console.log("Error while fetching data");
            }
        };
        fetchData();
    }, []);

    const clickLike = (productId) => {
        setProducts(
            products.map((product) =>
                product.id === productId
                    ? { ...product, liked: !product.liked }
                    : product
            )
        );
    };

    const toggleVisibility = (section) => {
        setVisibilityState((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className='mt-20 p-4'>
            <div className='flex flex-col gap-3 text-center'>
                <p className='text-5xl'>DISCOVER OUR PRODUCTS</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                    <br />
                    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
            <hr className='mt-5 w-full' />
            <div className='flex flex-row justify-between mt-4 mb-4'>
                <div className='flex flex-row gap-18'>
                    <p>34567 ITEMS</p>
                    <a>SHOW FILTER</a>
                </div>
                <div>
                    <div className='flex flex-row gap-2 group relative'>
                        <p>RECOMMENDED</p>
                        <img src={hover} alt="" />
                        <div className='flex flex-col hidden absolute group-hover:block top-7 shadow-lg bg-[#faf6f5] p-4 left-0'>
                            <p className='text-sm font-semibold mb-4'>RECOMMENDED</p>
                            <p className='text-sm font-semibold mb-4'>NEWEST FIRST</p>
                            <p className='text-sm font-semibold mb-4'>POPULAR</p>
                            <p className='text-sm font-semibold mb-4'>PRICE: HIGH TO LOW</p>
                            <p className='text-sm font-semibold mb-4'>PRICE: LOW TO HIGH</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Main content */}
            <div className='flex flex-row mt-10'>
                {/* Left side filters */}
                <div className='flex flex-col basis-2/10 bg-gray-200 p-4 gap-4'>
                    {/* Ideal For Section */}
                    <div className='flex flex-col mt-4'>
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>IDEAL FOR</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover}
                                alt="Toggle"
                                onClick={() => toggleVisibility('idealFor')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div
                            className={`${
                                visibilityState.idealFor ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}
                        >
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr />
                        </div>
                    </div>

                    {/* Occasion Section */}
                    <div className='flex flex-col mt-4'>
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>OCCASION</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover}
                                alt="Toggle"
                                onClick={() => toggleVisibility('occasion')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div
                            className={`${
                                visibilityState.occasion ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}
                        >
                            <label>
                                <input type="checkbox" /> Casual
                            </label>
                            <label>
                                <input type="checkbox" /> Party
                            </label>
                            <label>
                                <input type="checkbox" /> Formal
                            </label>
                            <hr />
                        </div>
                    </div>

                    {/* Add similar sections for Work, Fabric, Segment, and Suitable For */}
                </div>

                {/* Products Section */}
                <div className='flex-1 flex flex-wrap justify-start items-start gap-4'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='border p-4 flex flex-col items-center'
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className='w-32 h-32 object-cover'
                            />
                            <p className='text-center mt-2'>{product.title}</p>
                            <button
                                onClick={() => clickLike(product.id)}
                                className='mt-2 text-sm'
                            >
                                {product.liked ? (
                                    <img src={love} alt="Liked" />
                                ) : (
                                    <img src={hover} alt="Like" />
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
