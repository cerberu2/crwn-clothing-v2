import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";


    
const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);

    return (

        <Fragment>
            {
                Object.keys(categoriesMap).length === 0 ? (
                    <p>Loading categories...</p>
                ) : (
                    Object.keys(categoriesMap).map(category => (
                        <CategoryPreview title={category} products={categoriesMap[category]} />
                    ))
                )
            }
        </Fragment>
    );
};

export default CategoriesPreview;