import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';
import ProductCard from '../../components/product-card/product-card.component.jsx';

import {CategoryContainer, Title} from './category.styles.jsx';

const Category = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
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
