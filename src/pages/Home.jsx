import React, { useEffect, useState } from 'react';
import hover from '../assets/hover.svg'
import love from '../assets/love.svg'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [visibilityState, setVisibilityState] = useState({
            idealFor: false,
            occasion: false,
            work: false,
            fabric: false,
            segment: false,
            suitable: false,
            pattern:false,
            raw:false
        });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
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
                    <div className='flex flex-row gap-2 group relative'>
                        <p>RECOMMENDED</p>
                        <img src={hover} alt="" />
                        <div className='flex flex-col hidden absolute group-hover:block top-7 shadow-lg bg-[#faf6f5] p-4 left-0'>
                            <p className='text-sm font-semibold mb-4'>RECOMENDED</p>
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
                    <div className='flex flex-row gap-2'>
                        <input type="checkbox" />
                        <p>CUSTOMIZABLE</p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
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
                        <div className={`${
                                visibilityState.idealFor ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
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
                        <div className={`${
                                visibilityState.occasion ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>WORK</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('work')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.work ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>FABRIC</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('fabric')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.fabric ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>SEGMENT</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('segment')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.segment ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>SUITABLE FOR</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('suitable')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.suitable ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>RAW MATERIALS</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('raw')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.raw ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {/* Ideal For Section */}
                        <div className='flex flex-row justify-between items-center cursor-pointer'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-semibold'>PATTERN</p>
                                <p>All</p>
                            </div>
                            <img
                                src={hover} 
                                alt="Toggle"
                                onClick={() => toggleVisibility('pattern')}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className={`${
                                visibilityState.pattern ? 'block' : 'hidden'
                            } mt-2 flex flex-col gap-3`}>
                            <label>
                                <input type="checkbox" /> Men
                            </label>
                            <label>
                                <input type="checkbox" /> Women
                            </label>
                            <label>
                                <input type="checkbox" /> Baby & Kids
                            </label>
                            <hr/>
                        </div>
                    </div>
                </div>

                {/* Right side products */}
                <div className='flex flex-row flex-wrap gap-10 w-full ml-5'>
                    {products.map((product) => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <img className='w-50 h-60 mb-5' src={product.image} alt="" />
                            <div className='flex flex-col mt-1'>
                                <p className='font-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                <div className='flex flex-row gap-3'>
                                    <div className='flex flex-row gap-1 text-[5px]'>
                                        <a className='text-[8px]'>Sign in</a>
                                        <p className='text-[8px]'>or</p>
                                        <a className='text-[8px]'>Create an account to see pricing</a>
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
