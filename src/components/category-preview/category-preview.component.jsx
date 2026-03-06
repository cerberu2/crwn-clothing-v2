import ProductCard from '../product-card/product-card.component';

import {CategoryPreviewContainer, Preview, Title} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer key={title}>
      <h2>
        <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          products.filter((_, idx) => idx < 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;