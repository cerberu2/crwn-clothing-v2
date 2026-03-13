import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions.js';

import { CartIconStyles} from './cart-icon.styles.jsx';  


const CartIcon = () => {   

    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (    
         <CartIconStyles.CartIconContainer onClick={toggleIsCartOpen}>
            <CartIconStyles.ShoppingIcon  />
            <CartIconStyles.ItemCount>{cartCount}</CartIconStyles.ItemCount>
        </CartIconStyles.CartIconContainer>
    );  
}

export default CartIcon;