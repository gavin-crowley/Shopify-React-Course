import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 2.Basic Setup Complete


import { ShopContext } from '../context/shopContext'

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <div>
            {
                products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.title}>{product.title}</Link>
                ))
            }
        </div>
    )
}

export default Home
