import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault(); // submit 버튼을 누르면 페이지 refresh 되기 때문에 필요하지 않다면 해당 이벤트 넣기
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: text, status: 'active' });
    setText('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        id="item"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>ADD</button>
    </form>
  );
}
