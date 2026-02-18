import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";



const CategoriesPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext);

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