import React, { useState } from 'react';
import { useParams } from 'react-router';
import { editProduct } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

function EditProduct(match) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState({
    id: id,
    name: '',
    color: '',
    price: '',
  });

  const productList = useSelector((state) => state.product.list);
  console.log(productList);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProduct(product));
  };

  return (
    <div>
      <div className="container" style={{ margin: '4rem auto' }}>
        <h5 className="blue-text center-align">EDIT PRODUCT</h5>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="product_name">Name</label>

            <input
              onChange={handleChange}
              value={product.name}
              type="text"
              name="name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="product_color">color</label>
            <input
              onChange={handleChange}
              value={product.color}
              type="text"
              name="color"
            />
          </div>
          <div className="input-field">
            <label htmlFor="product_price">price</label>
            <input
              onChange={handleChange}
              value={product.price}
              type="text"
              name="price"
            />
          </div>
          <div className="input-field">
            <button className="btn blue">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
