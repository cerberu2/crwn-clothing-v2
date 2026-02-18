import DirectoryItem from '../directory-item/directory-item.component';
import {CategoriesContainer} from './category-directory.styles.jsx';

 const categories = [
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ];


const CategoryDirectory = () => {
   
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </CategoriesContainer>
    );
};

export default CategoryDirectory;   