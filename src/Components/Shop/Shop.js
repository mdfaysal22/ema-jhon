import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AsideCart from '../AsideCart/AsideCart';
import Card from '../Card/Card';
import './Shop.css';

const Shop = () => {
    const [data, setdata] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setdata(data));
    },[]);

    const [cart, setcart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setcart(newCart);
    }
    console.log(addToCart);
    return (
        <section>
           <div className="shop">
                <div className='shop-container text-center'>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {
                            data.slice(0,20).map(products => <Card key = {products.id} addToCart = {addToCart} product = {products}></Card>)
                        }
                    </div>
                    
                    <button className="btn my-4 bg-red-500 hover:bg-red-700 border-none btn-sm rounded-none">Show All</button>
                </div>


                {/* Cart Side */}
                <div className="cart-container">
                    <AsideCart cart = {cart}></AsideCart>
                </div>
            </div> 
        </section>
    );
};

export default Shop;