import Card from './Card';

const products = [
  {
    id: 1,
    title: 'Chaussures',
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4gl_CdcA6EIDDfeLXvmZ_jO-xDfw73DC7A&s',
  },
  {
    id: 2,
    title: 'T-shirt',
    price: 19.99,
    image: 'https://www.geekstore.co.ma/cdn/shop/products/Tshirt-One-Piece-Luffy-Geek-Store-818.jpg?v=1677165114',
  },
  {
    id: 3,
    title: 'Sac à dos',
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/711kYfkFNXL._UY1000_.jpg',
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardContainer;
