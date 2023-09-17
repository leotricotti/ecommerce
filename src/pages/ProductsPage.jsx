import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Navbar />
          <ProductCard products={products} />
        </>
      )}
    </main>
  );
};

export default Products;
