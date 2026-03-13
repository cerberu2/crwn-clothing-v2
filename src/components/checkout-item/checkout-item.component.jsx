import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.actions.js';   
import { selectCartItems } from '../../store/cart/cart.selector.js';

import {CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton} from './checkout-item.styles.jsx';

const CheckOutItem = ({ item }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = item;

    const clearItemHandler = () => {
        dispatch(clearItemFromCart(cartItems, item));
    }

    const decreaseQuantityHandler = () => {
        dispatch(removeItemFromCart(cartItems, item));
    }

    const increaseQuantityHandler = () => {
        dispatch(addItemToCart(cartItems, item));
    }   

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <div className="arrow" onClick={() => decreaseQuantityHandler()}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseQuantityHandler()}>&#10095;</div>
            </Quantity>
            <Price>${price}</Price>
            <RemoveButton onClick={() => clearItemHandler()}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckOutItem;    