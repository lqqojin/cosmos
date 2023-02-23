import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencilFill } from 'react-icons/bs';
import { FaShopify } from 'react-icons/fa';
import { useAuthContext } from '../context/AuthContext';
import Button from '../../components/ui/Button';
import User from '../../components/User/User';

export default function ShoppyNavbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-shoppyBrand">
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
