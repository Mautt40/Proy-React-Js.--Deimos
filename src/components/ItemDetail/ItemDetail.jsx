import React from "react";
import { products } from "../../productMock";
const ItemDetail = () => {
  return (
    <div>
      ItemDetail
      <h2>{products.title}</h2>
      <h2>{products.description}</h2>
    </div>
  );
};

export default ItemDetail;
