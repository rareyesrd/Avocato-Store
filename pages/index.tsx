import { useEffect, useState } from "react";
import React from "react";

import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>Learning Next.js</h1>
      <ul>
        {productList.map((product, i) => {
          return <img key={i} src={product.image} alt={product.name} />
        })}
      </ul>
    </div>
  );
};

export default Home;
