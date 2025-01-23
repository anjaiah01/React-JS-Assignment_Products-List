import React from 'react'
import hover from '../assets/hover.svg'
import { useEffect, useState } from 'react'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response  = await fetch("https://fakestoreapi.com/products")
                const data  = await response.json()
                console.log(data)
                setProducts(data)
            }catch{
                console.log("Error while fetching data")
            }
        }
        fetchData()
    },[])
  return (
    <div className='mt-20'>
        <div className='flex flex-col gap-3 text-center'>
            <p className='text-5xl'>DISCOVER OUR PRODUCTS</p>
            <p>Lorem ipsum dolor sit amet consectetur. 
                Amet est posuere rhoncus <br/>scelerisque. 
                Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </div>
        <hr className='mt-5 w-full'/>
        <div className='flex flex-row justify-between mt-4 mb-4'>
            <div className='flex flex-row gap-18'>
                <p>34567 ITEMS</p>
                <a>SHOW FILTER</a>
            </div>
            <div>
                <div className='flex flex-row gap-2'>
                    <p>RECOMEDED</p>
                    <img src={hover} alt="" />
                </div>
            </div>
        </div>
        <hr/>
        {/* Products and Filters */}
        <div>
            {/* left side filters */}
            <div></div>
            {/* right side producsts showing */}
            <div></div>
        </div>
    </div>
  )
}

export default Home