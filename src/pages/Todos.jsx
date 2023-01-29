import React, { useState } from 'react';
import TodoList from '../components/Todos/TodoList/TodoList';
import Header from '../components/Todos/Header/Header';
import { DarkModeProvider } from '../context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function Todos() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider className="styles.todosRoot styles.todosBody">
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
