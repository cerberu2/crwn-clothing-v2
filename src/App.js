import './categories.styles.scss';
import CategoryDirectory from './components/category-directory/category-directory.component'; 

const App = () => {

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


  return (
    <CategoryDirectory categories={categories}/>
  );
};

export default App;
