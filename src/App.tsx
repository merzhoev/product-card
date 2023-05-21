import { ProductCard } from 'components/product-card';
import { IProductCard } from 'types/entities';
import productImage from './static/images/product-1.png';

const product: IProductCard = {
  id: 1,
  price: 100,
  images: [
    { colorId: 1, image: productImage },
    { colorId: 2, image: productImage },
    { colorId: 3, image: productImage },
  ],
  title: 'Zebronics head phone',
  description:
    'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
  colors: [
    { id: 1, color: '#EE4444' },
    { id: 2, color: '#3C81F6' },
    { id: 3, color: '#000000' },
  ],
};

function App() {
  return (
    <div className="app">
      <ProductCard {...product} />
    </div>
  );
}

export default App;
