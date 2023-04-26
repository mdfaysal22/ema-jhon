import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AsideCart from "../AsideCart/AsideCart";
import Card from "../Card/Card";
import { addToDb, deleteShoppingCart, getAddedCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  // let { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  // const [allData, setAllData] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);

  useEffect(()=>{
    const uri = `http://localhost:5000/products?page=${page}&size=${size}`
    fetch(uri)
    .then(res => res.json())
    .then(data => {
      setCount(data.count)
      setProducts(data.products)
    })
  },[page, size])

  // const showText = {
  //   show: "Show All",
  //   Hidden: "Hidden All",
  // };
  // let show = showText.show;

  // if (!allData) {
  //   data = data.slice(0, 12);
  // } else {
  //   data = data.slice();
  //   show = showText.Hidden;
  // }

  const [cart, setcart] = useState([]);

  const clearCart = () => {
    setcart([]);
    deleteShoppingCart();
  };

  const addToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existsProduct) => existsProduct._id === product._id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const restCart = cart.filter((restCart) => restCart._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...restCart, exists];
    }
    setcart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    const getAdderCarts = getAddedCart();
    const ids = Object.keys(getAdderCarts);
    
    const savedCarts = [];

    fetch('http://localhost:5000/productsByIds', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      for (const id in getAdderCarts) {
        const addedProduct = data.find((singleData) => singleData._id === id);
        if (addedProduct) {
          const quantity = getAdderCarts[id];
          addedProduct.quantity = quantity;
          savedCarts.push(addedProduct);
        }
      }
    setcart(savedCarts);
    }) 
    
  }, [products]);

  return (
    <section>
      <div className="shop">
        <div className="shop-container text-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {products.map((products) => (
              <Card
                key={products._id}
                addToCart={addToCart}
                product={products}
              ></Card>
            ))}
          </div>

          <div>
            <div className="bg-yellow-100 border-l-8 border-yellow-300 py-3 text-xl font-semibold">
              Currently Selected Page {page} and Page Size {size}
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="btn-group my-3">
              {/* className={number === page && 'btn btn-info' || `btn btn-secondary`} === Wrong Way */}
              {[...Array(pages).keys()].map((number) => (
                <button
                  className={`btn btn-secondary ${
                    number === page && "btn btn-info"
                  }`}
                  onClick={() => setPage(number)}
                  key={number}
                >
                  {number+1}
                </button>
              ))}
            </div>
            <select onChange={event => setSize(event.target.value)}  className="select">
              <option  value={5}>5</option>
              <option selected value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          {/* <button
            onClick={() => {
              setAllData(!allData);
            }}
            id="ShowBtn"
            className="btn my-4 bg-red-500 hover:bg-red-700 border-none btn-sm rounded-none"
          >
            {show}
          </button> */}
        </div>

        {/* Cart Side */}
        <div className="cart-container">
          <AsideCart clearCart={clearCart} cart={cart}>
            <Link to={"/review"}>
              <button className="btn w-full rounded-none bg-yellow-500 border-0 hover:bg-yellow-600">
                <span className="mr-2">Review Order</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </AsideCart>
        </div>
      </div>
    </section>
  );
};

export default Shop;
