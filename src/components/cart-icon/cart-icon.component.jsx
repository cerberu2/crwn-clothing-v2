import { useContext } from 'react';

import { CartContext } from '../../context/cart.context.jsx';

import { CartIconStyles} from './cart-icon.styles.jsx';  


const CartIcon = () => {   
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);  

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (    
         <CartIconStyles.CartIconContainer onClick={toggleIsCartOpen}>
            <CartIconStyles.ShoppingIcon  />
            <CartIconStyles.ItemCount>{cartCount}</CartIconStyles.ItemCount>
        </CartIconStyles.CartIconContainer>
    );  
}

export default CartIcon;