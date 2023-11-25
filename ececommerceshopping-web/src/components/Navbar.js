import { useState, useContext } from "react";
import { CartContext } from "../CardContext";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
// import cartProduct from "./CartProduct
import CartProduct from "./CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantitiy,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Roshni Ecommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} item)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Item in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                // <h1>{currentProduct.id}</h1>
                <CartProduct key={idx} id={currentProduct.id} quantitiy={currentProduct.quantitiy}></CartProduct>

              ))}
              <h1>Total:{cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">purches items!</Button>
            </>
          ) : (
            <h1>This is the model body</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
