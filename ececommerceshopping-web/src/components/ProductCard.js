import{ Card ,Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
function ProductCard(props)//props.product is the product we aare selling
{
    const product = props.product;
    const cart = useContext(CartContext);
    const ProductQuantitiy = cart.getProductQuantitiy(product.id);
    console.log(cart.items);
return(
    <Card>
     <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>${product.price}</Card.Title>
        { ProductQuantitiy > 0 ?
            <>
            <Form as={Row}>
                <Form.Label column="true" sm="6">In Cart: {ProductQuantitiy}</Form.Label>
                <Col sm="6">
                    <Button sm="6"  onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                    <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove from cart</Button>
            </>
            :

        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Card</Button>
        }

        {/* <Card.Title>{product.title}</Card.Title> */}
     </Card.Body>
    </Card>
)
}
export default ProductCard;