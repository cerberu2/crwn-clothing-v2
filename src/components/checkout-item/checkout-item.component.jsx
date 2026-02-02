import { useContext } from 'react';
import { CartContext } from '../../context/cart.context.jsx';

import './checkout-item.styles.scss';
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
        <div className="checkout-item-container">
            <div className="image-container">
                <img className="image-container" src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseQuantityHandler()}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseQuantityHandler()}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <span className="remove-button" onClick={() => clearItemHandler()}>&#10005;</span>
        </div>
    );
};

export default CheckOutItem;    