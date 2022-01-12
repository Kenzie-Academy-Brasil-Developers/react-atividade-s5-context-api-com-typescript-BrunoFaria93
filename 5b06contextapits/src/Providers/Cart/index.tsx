import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<CartProviderData>({} as CartProviderData);

interface CartProviderProps{
    children: ReactNode;
}

interface Product {
  title: string,
  price: number,
  image: string
}

interface CartProviderData{
  cart: Product[]
  addProduct: (product: Product) => void
  deleteProduct: (productToBeDeleted: Product) => void
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);