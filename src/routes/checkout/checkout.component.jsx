import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component.jsx";

import {CheckoutContainer, CheckoutHeader, CheckoutHeaderblock, Total} from './checkout.styles.jsx';

const CheckOut = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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