
import React, { useState, useMemo } from 'react';
import type { Product, CartItem } from './types';
import { PRODUCTS, TAX_RATE } from './constants';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

const App: React.FC = () => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCalculations = useMemo(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [cartItems]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Produk</h2>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
        <aside className="w-full lg:w-[400px] bg-white border-l border-gray-200 flex flex-col">
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
            subtotal={cartCalculations.subtotal}
            tax={cartCalculations.tax}
            total={cartCalculations.total}
          />
        </aside>
      </main>
    </div>
  );
};

export default App;
