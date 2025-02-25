// CartPage.tsx
import React, { useState } from 'react';
import Cart from './Cart';
import { TCartItem } from '../types/TBook';


const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([
    // Sample cart items
    {_id:"1", id: '1', name: 'Book 1', price: 10, quantity: 2, stock: 10, brand: 'Brand A', model: 'Model X', createdAt: '2025-02-25', updatedAt: '2025-02-25' },
    { _id:"2",id: '2', name: 'Book 2', price: 15, quantity: 1, stock: 5, brand: 'Brand B', model: 'Model Y', createdAt: '2025-02-20', updatedAt: '2025-02-20' }
  ]);

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateItemQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <div>
     
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateItemQuantity={handleUpdateItemQuantity}
      />
    </div>
  );
};

export default CartPage;
