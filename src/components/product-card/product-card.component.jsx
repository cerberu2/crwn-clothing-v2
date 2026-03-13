import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart} from '../../store/cart/cart.actions.js';
import {BUTTON_TYPE_CLASS} from '../button/button.component.jsx';

import {Footer, FooterName,FooterPrice, Image, ProductCardButton, ProductCardContainer } from './product-card.styles.jsx';  

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };    

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>  
              <FooterName>{name}</FooterName>
              <FooterPrice>${price}</FooterPrice>
      </Footer>
      <ProductCardButton buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart}>Add to Cart</ProductCardButton>
    </ProductCardContainer>
  );
}

export default ProductCard; 