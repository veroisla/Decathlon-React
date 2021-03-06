import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Product.scss';

import { Link } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';

function Product(props) {
  return (
    <Link to={`/productDetail/${props.product.models[0].modelId}`}>
      <div className="product__article">
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
        <div className="product__star">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <p className="product__leadTime">{props.product.models[0].leadTime}</p>
      </div>
    </Link>
  );
}

export default Product;
