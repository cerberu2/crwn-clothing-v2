import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import CheckOutItem from "../../components/checkout-item/checkout-item.component.jsx";

import {CheckoutContainer, CheckoutHeader, CheckoutHeaderblock, Total} from './checkout.styles.jsx';

const CheckOut = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderblock>
                    <span>Product</span>
                </CheckoutHeaderblock>
                <CheckoutHeaderblock>
                    <span>Name</span>
                </CheckoutHeaderblock>
                <CheckoutHeaderblock>
                    <span>Quantity</span>
                </CheckoutHeaderblock>
                <CheckoutHeaderblock>
                    <span>Price</span>
                </CheckoutHeaderblock>
                <CheckoutHeaderblock>
                    <span>Remove</span>
                </CheckoutHeaderblock>
            </CheckoutHeader>
            {cartItems && cartItems.map((item) => (
                <CheckOutItem key={item.id} item={item} />
            ))}
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default CheckOut;