import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AsideCart from '../AsideCart/AsideCart';
import '../Shop/Shop.css';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import AddedCart from './AddedCart/AddedCart';



const Review = () => {
    const {products, previousCart} = useLoaderData();
    const [cart , setCart] = useState(previousCart);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const remainingProduct = cart.filter(product => product.id !== id);
        setCart(remainingProduct);
        removeFromDb(id);
    }
    
    return (
        <div className='shop'>
            <div className='shop-container'>
                {
                    cart.map(product => <AddedCart cart = {product} handleRemoveItem = {handleRemoveItem} key={cart.id}></AddedCart>)
                }
                {
                    cart.length === 0 && <div className='text-center bg-yellow-100 py-10 text-3xl my-6'>
                        <h2 className='font-semibold'>Please Order Somethings. Visit Our <Link to={'/orders'}><button className='bg-red-500 p-2 text-white rounded-md text-xl'>Shop</button></Link></h2>
                    </div>
                }
            </div>
            <div className='cart-container pb-10'>
                <AsideCart clearCart = {clearCart} cart = {cart}></AsideCart>
            </div>
        </div>
    );
};

export default Review;