export const addNewProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};
export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};
export const editProduct = (product) => {
  return {
    type: 'EDIT_PRODUCT',
    product,
  };
};
