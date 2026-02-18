import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component.jsx';

import {CategoryContainer, Title} from './category.styles.jsx';

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category] || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categoriesMap[category]) {
            setProducts(categoriesMap[category]);
            setLoading(false);
        }
    }, [categoriesMap, category]);

    if (loading) {
        return <p>Loading category...</p>;
    }
    return (
        <Fragment key={category}>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;
