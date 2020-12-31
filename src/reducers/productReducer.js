const initialState = {
  list: [
    {
      id: 0,
      name: 'Iphone X',
      color: 'Black',
      price: 30000000,
    },
    {
      id: 1,
      name: 'Iphone 12',
      color: 'Black',
      price: 30000000,
    },
  ],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
  
      const newid =
        state.list.length === 0 ? 0 : state.list[state.list.length - 1].id + 1;
      return {
        ...state,
        list: [...state.list, { ...action.product, id: newid }],
      };
    }
    case 'DELETE_PRODUCT': {
      const newList = state.list.filter((product) => product.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    }
    case 'EDIT_PRODUCT': {
      // console.log(action);
      const newList = state.list.map((product) =>
        product.id === action.product.id
          ? {
              ...product,
              name: action.product.name,
              color: action.product.color,
              price: action.product.price,
            }
          : product
      );
      const newList1 = state.list.forEach((product) => {
        if (product.id === action.product.id) {
          product = {
            ...product,
            name: action.product.name,
            color: action.product.color,
            price: action.product.price,
          };
        }
      });

      return {
        ...state,
        list: newList1,
      };
    }
    default:
      return state;
  }
};
export default productReducer;
