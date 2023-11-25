import { Button } from "react-bootstrap";
import { CartContext } from "../CardContext";
import { useContext } from "react";
import { getProductData } from "../ProductStore";

function CartProduct(props){
   const cart = useContext(CartContext);
   const id = props.id;
   const quantitiy = props.quantitiy;
   const productData = getProductData(id);

   return(
    <>
      <h3>{productData.title}</h3>
      <p>{quantitiy}</p>
      <p>{( quantitiy * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </>
   )
}
export default CartProduct