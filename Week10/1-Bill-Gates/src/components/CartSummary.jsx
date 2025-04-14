import React from "react";

function CartSummary({ cart, products }) {
  const cartItems = Object.entries(cart);

  if (cartItems.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">🛒 Your Purchases</h2>
      <ul>
        {cartItems.map(([id, quantity]) => {
          const product = products.find((p) => p.id === parseInt(id));
          const total = product.price * quantity;
          return (
            <li key={id} className="mb-2">
              {product.name} × {quantity} = ${total.toLocaleString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartSummary;
