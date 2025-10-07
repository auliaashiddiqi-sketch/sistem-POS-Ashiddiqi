
import React from 'react';
import type { CartItem as CartItemType } from '../types';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { TrashIcon } from './icons/TrashIcon';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <li className="flex items-center space-x-4">
      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
      <div className="flex-1">
        <p className="font-semibold text-sm text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-500">{formatCurrency(item.price)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-200"
          >
            <MinusIcon />
          </button>
          <span className="px-3 text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-200"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
         <p className="font-semibold text-sm text-gray-800">{formatCurrency(item.price * item.quantity)}</p>
         <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 mt-2">
            <TrashIcon />
         </button>
      </div>
    </li>
  );
};

export default CartItem;
