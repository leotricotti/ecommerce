import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const { products } = useFetchProducts();
  return (
    <>
      <Navbar />
      <ProductsCard products={products} />
      <Pagination />
    </>
  );
};

export default Products;
