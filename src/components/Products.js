import React, { useEffect, useState } from "react";

import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("searchQuery", searchQuery);
    let url = `https://my-json-server.typicode.com/sh0402/hnm-example/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {productList.map((item, idx) => (
        <ProductCard item={item} key={idx} />
      ))}
    </div>
  );
};
