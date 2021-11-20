import { useEffect, useState } from 'react';
import productsData from '../mocks/en-us/products.json';
import _ from 'lodash';

const useProducts = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getProducts = async (categories=[]) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    const newProducts = _.cloneDeep(productsData);
    if (categories.length > 0) {
      newProducts.results = productsData.results.filter((product) => categories.includes(product.data.category.id));
    }
    setData(newProducts);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { data, loading, getProducts };
};

export default useProducts;
