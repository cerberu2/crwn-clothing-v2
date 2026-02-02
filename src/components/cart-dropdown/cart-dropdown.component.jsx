import Button from '../button/button.component.jsx';    
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context.jsx';   

import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropdown = () => {   
    const { cartItems } = useContext(CartContext);
    
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }   

    return (    
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
                {cartItems.length === 0 && <span className='empty-message'>Your cart is empty</span>}
            </div>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </div>
    );  
}   

export default CartDropdown;
