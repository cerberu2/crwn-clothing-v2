import { useContext } from 'react';
import { CartContext } from '../../context/cart.context.jsx';

import {CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton} from './checkout-item.styles.jsx';

const CheckOutItem = ({ item }) => {

    const { name, imageUrl, price, quantity } = item;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => {
        clearItemFromCart(item);
    }

    const decreaseQuantityHandler = () => {
        removeItemFromCart(item);
    }

    const increaseQuantityHandler = () => {
        addItemToCart(item);
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