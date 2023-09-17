import { useState, useEffect } from "react";

export default function useFetchProducts({ filter, index }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      console.log(filter, index);
      try {
        const response = await fetch(
          `http://localhost:8080/api/products?${filter}=${index}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [filter, index]);

  return { products };
}
