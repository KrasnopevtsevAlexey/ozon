"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

const cartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("Error CartProvider");
  }
  return context;
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
   
    console.log('🛒 ADD_TO_CART called for:', product.id, product.title);
    setCartItem((prev) => {
      console.log('📦 Previous cart:', prev);
      const findProduct = prev.find((p) => p.id === product.id);
       console.log('🔍 Existing item:', findProduct);
      
      if (findProduct) {
        const newCart = prev.map((p) => 
         
          p.id === product.id 
          ? { ...p, count: p.count + 1 }
          : p
        );
         console.log('➕ Updated cart:', newCart);
          return newCart;
        
      } else {
        const newCart = [...prev, { ...product, count: 1 }];
      console.log('🆕 New cart:', newCart);
        return newCart;
      }
    });

    // setCartItem([{...product, count: 1}])
  }, []);
  const deleteCartItem = (product: Product) => {
    setCartItem((prev) => {
      const findProduct = cartItem.find((p) => p.id === product.id);
      if (findProduct) {
        if (findProduct.count > 1) {
          return prev.map((p) => {
            if (p.id === findProduct.id) {
              return { ...p, count: p.count - 1 };
            } else {
              return p;
            }
          });
        } else {
          return prev.filter((p) => p.id !== product.id);
        }
      } else {
        return prev;
      }
    });
  };
  return (
    <cartContext.Provider
      value={{ isOpen, cartItem, setIsOpen, addToCart, deleteCartItem }}
    >
      {children}
    </cartContext.Provider>
  );
}
