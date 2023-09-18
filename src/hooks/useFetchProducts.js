import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("page");
  const [index, setIndex] = useState("1");

  useEffect(() => {
    async function fetchProducts() {
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

  return { products, setFilter, setIndex };
}
