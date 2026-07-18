import "./product.css";
const Product = (props) => {
  return (
    <div>
      <div className="card3">
        <h2>{props.product}</h2>
        <img src={props.image} alt={props.productName} />
        <p>Price: {props.price}</p>
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
};

export default Product;
