import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/ProductDetail.scss';

import { AiTwotoneStar } from 'react-icons/ai';
import { GiPresent } from 'react-icons/gi';
function ProductDetail(props) {
  return (
    <>
      {' '}
      <p className="info__links">
        calzado deportivo... / zapatillas deportivas
      </p>
      <div className="productDetail__article">
        <img
          className="productDetail__img"
          src={props.product.models[0].image.url}
          alt={props.product.models[0].image.url}
        />
        <p className="productDetail__webLabel">{props.product.webLabel}</p>
        <div className="productDetail__star">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <p className="productDetail__id">{props.product.models[0].modelId}</p>
        <p className="productDetail__price">
          {props.product.models[0].price} €
        </p>
        <p className="productDetail__present">
          <GiPresent className="productDetail__present__icon" />
          ¿Quieres regalar este producto?{' '}
          <strong className="productDetail__present--strong">Más info</strong>
        </p>
      </div>
    </>
  );
}
export default ProductDetail;
