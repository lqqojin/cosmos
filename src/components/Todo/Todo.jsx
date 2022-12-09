import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'action';
		onUpdate({ ...todo, status });
	}
	const handleClick = () => onDelete(todo);
	return (
		<li key={id}
				style={status === 'completed' ? {textDecoration: 'line-through'} : {}}>
			<input
				type="checkbox"
				id='checkbox'
				checked={status === 'completed'}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox">{text}</label>
			<button
				className='bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
				onClick={handleClick}
			>
				<FaTrashAlt />
			</button>
		</li>
	);
}
