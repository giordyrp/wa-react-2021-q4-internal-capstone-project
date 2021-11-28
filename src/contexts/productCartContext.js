import { createContext, useReducer } from 'react';

const ProductCartContext = createContext();

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return state;
    }
    case 'remove': {
      return state;
    }
    case 'increase': {
      return state;
    }
    case 'decrease': {
      return state;
    }
    default:
      return state;
  }
};

const ProductCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProduct = (productId) => dispatch({ type: 'add', payload: { id: productId } });
  const removeProduct = (productId) => dispatch({ type: 'remove', payload: { id: productId } });
  const increaseProductCount = (productId) =>
    dispatch({ type: 'increase', payload: { id: productId } });
  const decreaseProductCount = (productId) =>
    dispatch({ type: 'decrease', payload: { id: productId } });

  const value = {
    ...state,
    addProduct,
    removeProduct,
    increaseProductCount,
    decreaseProductCount,
  };

  return <ProductCartContext.Provider value={value}>{children}</ProductCartContext.Provider>;
};

export default ProductCartProvider;
