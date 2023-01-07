import React from 'react';
import TodoList from '../components/TodoList/TodoList';
import Header from '../components/Header/Header';
import { DarkModeProvider } from '../context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function Todos({filter, setFilter}) {
	return (
		<DarkModeProvider>
			<Header filters={filters} filter={filter} onFilterChange={setFilter}/>
			<TodoList filter={filter} />
		</DarkModeProvider>
	);
}
