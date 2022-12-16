import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'action';
		onUpdate({ ...todo, status });
	}
	const handleClick = () => onDelete(todo);
	return (
		<li className={styles.todo} key={id}
				style={status === 'completed' ? {textDecoration: 'line-through'} : {}}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id='checkbox'
				checked={status === 'completed'}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox">{text}</label>
			<span className={styles.icon}>
				<button
					className={styles.button}
					onClick={handleClick}
				>
					<FaTrashAlt />
				</button>
			</span>
		</li>
	);
}
