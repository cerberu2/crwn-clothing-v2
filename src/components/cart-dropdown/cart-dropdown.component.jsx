import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component.jsx';
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component.jsx';

const CartDropdown = () => {   
    const cartItems  = useSelector(selectCartItems);
    
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }  

    return (    
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
                {cartItems.length === 0 && <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );  
}   

export default CartDropdown;
