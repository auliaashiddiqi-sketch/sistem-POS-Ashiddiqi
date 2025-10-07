
import React from 'react';
import type { Product } from '../types';
import { PlusIcon } from './icons/PlusIcon';

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
      <div className="relative">
        <img className="w-full h-32 sm:h-40 object-cover" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-base leading-tight truncate flex-grow">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{formatCurrency(product.price)}</p>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <PlusIcon />
          <span>Tambah</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
