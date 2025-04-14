import React, { useState } from "react";

export default function ProductCard({
  product,
  balance,
  count,
  onBuy,
  onSell,
}) {
  const [amount, setAmount] = useState(0);

  const totalCost = amount * product.price;
  const canBuy = amount > 0 && totalCost <= balance;
  const canSell = amount > 0 && count >= amount;

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value) || 0);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-24 mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-green-600 font-bold mb-2">${product.price}</p>
      <div className="flex gap-2 items-center w-full justify-center">
        <button
          onClick={() => onSell(product.id, amount)}
          disabled={!canSell}
          className={`px-4 py-1 rounded ${
            canSell
              ? "bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Sell
        </button>
        <input
          type="number"
          className="w-16 text-center border rounded px-2 py-1"
          value={amount}
          min="0"
          onChange={handleChange}
        />
        <button
          onClick={() => onBuy(product.id, amount)}
          disabled={!canBuy}
          className={`px-4 py-1 rounded ${
            canBuy
              ? "bg-green-500 text-white"
              : "bg-green-100 text-gray-300 cursor-not-allowed"
          }`}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
