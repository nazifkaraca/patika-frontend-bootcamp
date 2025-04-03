// src/components/Purchase/Purchase.jsx
import React from "react";
import PurchaseHeading from "./PurchaseHeading";
import ProductList from "./ProductList";
import "./Purchase.css";

const Purchase = () => {
  return (
    <section id="purchase" className="my-5">
      <div className="product-container container w-75">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <PurchaseHeading />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Purchase;
