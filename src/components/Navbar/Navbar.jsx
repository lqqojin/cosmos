import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SearchHeader from 'src/components/Navbar/SearchHeader';
import styles from './Navbar.module.css';
import { BsYoutube } from 'react-icons/bs';

export default function Navbar() {
  const [keyword, setKeyword] = useState('');
  const handleClick = () => {
    setKeyword('');
  }
  return (
    <nav>
      <Link to='/'>
        <button
          className={styles.button}
          onClick={handleClick}
        >🏠</button>
      </Link>
      <Link to='/login'>
      <button className={styles.button}>
        Login
      </button>
      </Link>
      <Link to='/todos'>
      <button className={styles.button}>
        Todos
      </button>
      </Link>
      <header>
        <Link to='/videos'>
          <div>
            <BsYoutube />
            <h1>
              Youtube
            </h1>
          </div>
        </Link>
        <SearchHeader keyword={keyword}></SearchHeader>
      </header>
    </nav>

  );
}
