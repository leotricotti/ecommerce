import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <ProductsCard products={products} />
      <Pagination />
    </>
  );
};

export default Products;
