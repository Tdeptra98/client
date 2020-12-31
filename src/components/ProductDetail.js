import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions/productAction';
import { Link } from 'react-router-dom';
function ProductDetail(product) {
  const dispatch = useDispatch();

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{product.product.name}</span>
          <p>{product.product.color}</p>
          <p>{product.product.price}</p>
        </div>
        <div className="card-action">
          <button
            onClick={() => dispatch(deleteProduct(product.product.id))}
            className="btn red"
          >
            Delete
          </button>

          <Link to={`/${product.product.id}`}>
            <button className="btn blue btndelete">Edit Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
