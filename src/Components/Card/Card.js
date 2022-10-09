import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = (props) => {
    const {name, seller, price, ratings, img} = props.product;
    const defaultImg = "https://i.pinimg.com/originals/ca/ee/24/caee242cd190c87d4e94e070e01e9e07.jpg";
    return (
            <div className="card card-compact rounded bg-base-100 shadow-sm border ">
                <figure className='p-1'><img className=' rounded-t' src={img} 
                onError = {
                    (e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImg;
                    }
                }
                alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='font-semibold text-lg'>Price: $ <span>{price}</span></h4>
                    <p className='mt-4'>Manufacturer : <span>{seller}</span></p>
                    <p>Rating: <span>{ratings}</span></p>
                </div>
                <button onClick={() => {props.addToCart(props.product)}} className="btn rounded-none w-full bg-yellow-600 border-0 hover:bg-yellow-700">
                    <span className='mr-2'>Buy Now</span>
                    <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
    );
};

export default Card;