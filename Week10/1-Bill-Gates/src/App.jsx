import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

const INITIAL_BALANCE = 100_000_000_000;

export default function App() {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [cart, setCart] = useState({});

  const handleBuy = (id, amount) => {
    const product = products.find((p) => p.id === id);
    const total = product.price * amount;
    if (balance >= total) {
      setBalance((prev) => prev - total);
      setCart((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + amount,
      }));
    }
  };

  const handleSell = (id, amount) => {
    if (!cart[id] || cart[id] < amount) return;
    const product = products.find((p) => p.id === id);
    const total = product.price * amount;

    setBalance((prev) => prev + total);
    setCart((prev) => {
      const updated = { ...prev };
      updated[id] -= amount;
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="bg-green-500 text-white text-center text-3xl py-4 font-bold rounded mb-6">
        ${balance.toLocaleString()}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            balance={balance}
            count={cart[product.id] || 0}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        ))}
      </div>
    </div>
  );
}
