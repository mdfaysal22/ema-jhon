import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AsideCart.css';
const AsideCart = (props) => {
    const {cart, clearCart, children} = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = (total * .15);
    tax = parseInt(tax.toFixed(2));
    let grandTotal = total + totalShipping + tax;
    return (
        <div className='sticky top-0'>
            <div className='text-center'>
                    <h1 className='text-2xl font-bold uppercase py-10'>Order Summary</h1>
                    <p className='py-2 text-slate-700 font-semibold'>Selected Items: <span>{quantity}</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Total Price: $<span>{total}</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Total: Shopping Charge $<span>{totalShipping}</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Tax: $<span>{tax}</span></p>

                    <p className='py-6 text-slate-900 font-bold text-xl'>Grand Total $<span>{grandTotal}</span></p>

                    {/* Button For Remove and Review Shopping */}
                    <div className='grid grid-flow-row mx-auto w-11/12'>
                    <button onClick={clearCart} className='btn w-full rounded-none bg-red-500 border-0 hover:bg-red-600 my-4'>
                        <span className='mr-2'>Clear Cart</span>
                        <FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon>    
                    </button>
                    
                    {children}
                    </div>
            </div>
        </div>
    );
};

export default AsideCart;