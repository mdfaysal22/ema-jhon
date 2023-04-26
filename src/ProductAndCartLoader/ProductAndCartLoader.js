import { getAddedCart } from "../Components/utilities/fakedb";

export const ProductAndCartLoader = async () => {
    // Get Products Data
    const productData = await fetch('http://localhost:5000/products');
    const {products} = await productData.json();


    // Get Storage Object.
    const cart = getAddedCart();
    const previousCart = [];
    for(const id in cart){
        const addedProduct = products.find(product => id === product._id);
        if(addedProduct){
            const quantity = cart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return {products, previousCart};
}