import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AsideCart.css';
const AsideCart = (props) => {
    return (
        <div>
            <div className='cart-container text-center '>
                    <h1 className='text-2xl font-bold uppercase py-10'>Order Summary</h1>
                    <p className='py-2 text-slate-700 font-semibold'>Selected Items: <span>{props.cart.length}</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Total Price: $<span>001</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Total: Shopping Charge $<span>005</span></p>
                    <p className='py-2 text-slate-700 font-semibold'>Tax: $<span>005</span></p>

                    <p className='py-6 text-slate-900 font-bold text-xl'>Grand Total $<span>0000</span></p>

                    {/* Button For Remove and Review Shopping */}
                    <div className='grid grid-flow-row mx-auto w-11/12'>
                    <button className='btn w-full rounded-none bg-red-500 border-0 hover:bg-red-600 my-4'>
                        <span className='mr-2'>Clear Cart</span>
                        <FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon>    
                    </button>
                    <button className='btn w-full rounded-none bg-yellow-500 border-0 hover:bg-yellow-600'>
                        <span className="mr-2">Review Order</span>
                        <FontAwesomeIcon icon= {faArrowRight}></FontAwesomeIcon>    
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default AsideCart;