import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);

  const add = (product) => {
    setLines((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      return existing
        ? current.map((line) =>
            line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line
          )
        : [...current, { product, quantity: 1 }];
    });
  };

  const update = (id, quantity) => {
    setLines((current) =>
      quantity < 1
        ? current.filter((line) => line.product.id !== id)
        : current.map((line) =>
            line.product.id === id ? { ...line, quantity } : line
          )
    );
  };

  const remove = (id) => {
    setLines((current) => current.filter((line) => line.product.id !== id));
  };

  const value = useMemo(() => ({
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    add, update, remove,
  }), [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
