import { createContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { productsArray, getProductData } from "./ProductStore";

export const CartContext = createContext({
  items: [],
  getProductQuantitiy: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  //[{id: 1, quantitiy: 3},{id:2, quantitiy:1}]
});
export function CartProvider({ children }) {
  const [cartProducts, setcartProducts] = useState([]);

  function getProductQuantitiy(id) {
    const quantitiy = cartProducts.find(
      (product) => product.id === id
    )?.quantitiy;
    if (quantitiy === undefined) {
      return 0;
    }
    return quantitiy;
  }

  function addOneToCart(id) {
    const quantitiy = getProductQuantitiy(id);
    if (quantitiy === 0) {
      setcartProducts([
        ...cartProducts,
        {
          id: id,
          quantitiy: 1,
        },
      ]);
    } //product is not in cart
    else {
      // product is in cart
      // [{ id: 1, quantitiy: 3}]
      setcartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantitiy: product.quantitiy + 1 } // is true
              : product ///false
        )
      );
    }
  }
  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantitiy;
    });
    return totalCost;
  }
  function deleteFromCart(id) {
    //[] if an object meets a condition , add the object to array
    // [product1, product2, product3]
    //[product1]
    setcartProducts(cartProducts =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function removeOneFromCart(id) {
    const quantitiy = getProductQuantitiy(id);
    if (quantitiy == 1) {
      deleteFromCart(id);
    } else {
      setcartProducts(
        cartProducts.map(
          product =>
            product.id === id // if condition
              ? { ...product, quantitiy: product.quantitiy - 1 } // is true
              : product ///false
        )
      )
    }
  }
  const contextValue = {
    items: cartProducts,
    getProductQuantitiy,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
//code down here
//context (cart, addtocart , removecart)
//provider -> gives your react app access to all the things in your context
