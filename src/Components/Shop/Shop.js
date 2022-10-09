import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AsideCart from "../AsideCart/AsideCart";
import Card from "../Card/Card";
import { addToDb, deleteShoppingCart, getAddedCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  // const [data, setdata] = useState([]);
  // useEffect( () => {
  //     fetch('products.json')
  //     .then(res => res.json())
  //     .then(data => setdata(data));
  // },[]);

  let data = useLoaderData();
  const [allData, setAllData] = useState(false);

  const showText = {
    show: "Show All",
    Hidden: "Hidden All",
  };
  let show = showText.show;

  if (!allData) {
    data = data.slice(0, 12);
  } else {
    data = data.slice();
    show = showText.Hidden;
  }

  const [cart, setcart] = useState([]);

  const clearCart = () => {
    setcart([]);
    deleteShoppingCart();
  };

  const addToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existsProduct) => existsProduct.id === product.id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const restCart = cart.filter((restCart) => restCart.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...restCart, exists];
    }
    setcart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    const getAdderCarts = getAddedCart();
    const savedCarts = [];
    for (const id in getAdderCarts) {
      const addedProduct = data.find((singleData) => singleData.id === id);
      if (addedProduct) {
        const quantity = getAdderCarts[id];
        addedProduct.quantity = quantity;
        savedCarts.push(addedProduct);
      }
    }
    setcart(savedCarts);
  }, [data]);

  return (
    <section>
      <div className="shop">
        <div className="shop-container text-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {data.map((products) => (
              <Card
                key={products.id}
                addToCart={addToCart}
                product={products}
              ></Card>
            ))}
          </div>

          <button
            onClick={() => {
              setAllData(!allData);
            }}
            id="ShowBtn"
            className="btn my-4 bg-red-500 hover:bg-red-700 border-none btn-sm rounded-none"
          >
            {show}
          </button>
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
