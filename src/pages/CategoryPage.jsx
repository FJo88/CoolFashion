import ProductList from "../components/ProductList"
import { useLocation } from "react-router";
import {useSelector} from 'react-redux'

const CategoryPage = () => {

  const allProducts = useSelector((state) => state.products.products)

  const location = useLocation()

  return (
    <ProductList products={allProducts} category={location.state.category}/>
  )
};

export default CategoryPage;
