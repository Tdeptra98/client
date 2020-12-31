import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '../actions/productAction';
function AddProduct(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    color: '',
    price: '',
  });
  const productList = useSelector((state) => state.product.list);
  console.log(productList);
  //   const newid = productList[productList.length - 1].id + 1;
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setProduct({ ...product, id: newid });
    dispatch(addNewProduct(product));

    setProduct({
      id: 0,
      name: '',
      color: '',
      price: '',
    });
  };
  return (
    <div>
      <div className="container" style={{ margin: '4rem auto' }}>
        <h5 className="blue-text center-align">ADD PRODUCT</h5>

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
            <button className="btn blue">ADD PRODUCT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
