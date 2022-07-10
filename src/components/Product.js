import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Product.scss';

function Product(props) {
  return (
    <>
      <div className="product__imgPrice">
        <img
          className="product__img"
          src={props.product.models[0].image.url}
          alt={props.product.models[0].image.url}
        />
        <p className="product__price">{props.product.models[0].price} €</p>
      </div>
      <p className="product__label">{props.product.brand.label}</p>
      <p className="product__webLabel">{props.product.webLabel}</p>
      <p className="product__leadTime">{props.product.models[0].leadTime}</p>
    </>
  );
}

export default Product;
