import React from 'react';
import ProductDetails from './ProductDetail';
import { useSelector } from 'react-redux';
function ListProduct(props) {
  const productList = useSelector((state) => state.product.list);
  return (
    <div className="container">
      <h5 className="blue-text center-align">LIST PRODUCT</h5>
      <div className="row">
        {productList &&
          productList.map((product) => (
            <ProductDetails product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default ListProduct;
