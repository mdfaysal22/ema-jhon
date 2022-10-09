import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddedCart = ({cart, handleRemoveItem}) => {
    return (
        <div className='flex items-center my-4 bg-slate-100 border-slate-200 border-2 rounded-lg'>
            <div className='w-40 p-1 rounded-lg mr-10'>
                <img className='rounded-lg' src={cart.img} alt="" />
            </div>
            <div className='flex w-full justify-between items-center'>
                <div className='font-semibold'>
                    <h2 className='text-xl font-semibold'>Name : {cart.name}</h2>
                    <p className='font-semibold'>Price: {cart.price}</p>
                    <p>Shipping Charge: {cart.shipping}</p>
                    <p>Quantity: {cart.quantity}</p>
                </div>
                <div className='mr-10'>
                    <button onClick={() => handleRemoveItem(cart.id)} className='bg-red-100 hover:bg-red-200 transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-full'>
                        <FontAwesomeIcon className='text-red-900'  icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddedCart;