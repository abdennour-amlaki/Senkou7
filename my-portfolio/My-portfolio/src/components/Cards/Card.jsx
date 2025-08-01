const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} width="10%" />
      <h3>{product.title}</h3>
      <p>{product.price} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
};

export default Card;
