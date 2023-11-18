import React, { createContext, useContext, useState } from "react";

type Product = {
  [x: string]: string | number;
  image: string;
  title: string;
  description: string;
  price: number;
};

type CartContextType = {
  cart: (Product & { quantity: number })[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);

  const findProductIndex = (product: Product) =>
    cart.findIndex((item) => item.title === product.title);

  const updateCart = (product: Product, addToCart: boolean) => {
    const existingProductIndex = findProductIndex(product);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      const productInCart = updatedCart[existingProductIndex];

      if (addToCart) {
        productInCart.quantity += 1;
      } else {
        if (productInCart.quantity > 1) {
          productInCart.quantity -= 1;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
      }

      setCart(updatedCart);
    } else if (addToCart) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart: (product) => updateCart(product, true), removeFromCart: (product) => updateCart(product, false) }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
