import { useState } from 'react';
import { BabyShopHeader } from './components/BabyShopHeader';
import { CartDrawer } from './components/CartDrawer';
import { TallyChatbot } from './components/TallyChatbot';
import { Product } from './data/products';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export type CartItem = {
  product: Product;
  quantity: number;
};

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <BabyShopHeader
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onClear={clearCart}
      />

      <TallyChatbot />
    </div>
  );
}

export default App;


