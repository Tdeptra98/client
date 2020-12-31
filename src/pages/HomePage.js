import React from 'react';

import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';

function HomePage(props) {
  // const productList = useSelector((state) => state.product.list);
  // const dispatch = useDispatch();
  // console.log(productList);
  // const hanleAddProducct = () => {
  //   const newProduct = {
  //     id: 1,
  //     name: 'abc',
  //     color: 'black',
  //     price: 1000,
  //   };
  //   dispatch(addNewProduct(newProduct));
  // };
  return (
    <div>
      <AddProduct></AddProduct>
      <ListProduct></ListProduct>
    </div>
  );
}

export default HomePage;
