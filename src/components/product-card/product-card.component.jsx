import { useContext } from 'react';
import { CartContext } from '../../context/cart.context.jsx'; 
import {BUTTON_TYPE_CLASS} from '../button/button.component.jsx';

import {Footer, FooterName,FooterPrice, Image, ProductCardButton, ProductCardContainer } from './product-card.styles.jsx';  

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };    

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>  
              <FooterName>{name}</FooterName>
              <FooterPrice>${price}</FooterPrice>
      </Footer>
      <ProductCardButton buttonType={BUTTON_TYPE_CLASS.INVERTED} onClick={addProductToCart}>Add to Cart</ProductCardButton>
    </ProductCardContainer>
  );
}

export default ProductCard; 