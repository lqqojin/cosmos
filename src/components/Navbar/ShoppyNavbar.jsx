import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencilFill } from 'react-icons/bs';
import { FaShopify } from 'react-icons/fa';

export default function ShoppyHeader() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-shoppyBrand">
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
