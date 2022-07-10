import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/ListProducts.scss';
import '../styles/components/Product.scss';

import Product from './Product';
import { BsArrowUp } from 'react-icons/bs';

function ListProducts(props) {
  if (props.products.length === 0) {
    return <p>No existen productos que coincidan con tu búsqueda</p>;
  } else {
    const productElements = props.products.map((product, index) => {
      return (
        <li className="product__article product" key={index}>
          <Product product={product} />
        </li>
      );
    });
    return (
      <section>
        <ul className="listProducts">{productElements}</ul>
        <div className="listProducts__up">
          <BsArrowUp className="listProducts__arrow" />
        </div>
      </section>
    );
  }
}

export default ListProducts;
