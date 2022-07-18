import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/ListProducts.scss';
import '../styles/components/Product.scss';

import Product from './Product';

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
      <>
        <ul className="listProducts">{productElements}</ul>
      </>
    );
  }
}

export default ListProducts;
