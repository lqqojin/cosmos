import React, { useState, useEffect } from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	const handleAdd = (todo) => {
		setTodos([...todos, todo])
	}
	const handleUpdate = (updated) => {
		setTodos(todos.map(item => (item.id === updated.id) ? updated : item))
	}
	const handleDelete = (deleted) => {
		setTodos(todos.filter((item) =>(item.id !== deleted.id)));
	}
	const filtered = getFilteredItems(todos, filter);
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		return () => {
			console.log('깨끗하게 청소하는 일들을 합니다.')
		};
	}, [todos]);
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{
					filtered.map((item) => (
						<Todo
							key={item.id}
							todo={item}
							onUpdate={handleUpdate}
							onDelete={handleDelete}
						/>
					))
				}
			</ul>
			<AddTodo onAdd={handleAdd}/>
		</section>
	);
}

const getFilteredItems = (todos, filter) => {
	console.log('getFilteredItems', todos, filter)
	if (filter === 'all')  return todos;
	return todos.filter((todo) => todo.status === filter);
}

const readTodosFromLocalStorage = () => {
	console.log('[readTodosFromLocalStorage]');
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}
