import React, {useState, useEffect} from 'react';
import './Todo.module.css';

export default function Todo() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [orgTodos, setOrgTodos] = useState([]);
	const [todos, setTodos] = useState([]);
	const [form, setForm] = useState({ id: `${Math.random()}`, name: '', isCompleted: false });

	useEffect(() => {
		console.log('useEffect todos ์ต์ด ํธ์ถ', todos);
		const data = JSON.parse(localStorage.getItem('todos'));
		console.log(data);
		if (data && data.length > 0) {
			setTodos(data)
			setOrgTodos(data);
		}
		return () => {
			console.log('๐งน ์ต์ด ํธ์ถ ๊นจ๋ํ๊ฒ ์ฒญ์ํ๋ ์ผ๋ค์ ํฉ๋๋ค.');
		};
	}, []);

		useEffect(() => {
			console.log('useEffect todos', {todos, orgTodos, isDarkMode});
			return () => {
				console.log('๐งน ๊นจ๋ํ๊ฒ ์ฒญ์ํ๋ ์ผ๋ค์ ํฉ๋๋ค.');
				if (orgTodos && orgTodos.length > 0) {
					localStorage.setItem('todos', JSON.stringify(orgTodos));
				}
			};
		}, [todos]);

	const handleSubmit = (e) => {
		console.log(form);
		e.preventDefault(); // submit ๋ฒํผ์ ๋๋ฅด๋ฉด ํ์ด์ง refresh ๋๊ธฐ ๋๋ฌธ์ ํ์ํ์ง ์๋ค๋ฉด ํด๋น ์ด๋ฒคํธ ๋ฃ๊ธฐ
		setOrgTodos((prev) => {
			let todoData = [...prev, form];
			setTodos(() => todoData)
			return todoData;
		});
	};

	const handleAdd = (e) => {
		const { value = '' } = e.target;
		console.log(value)
		setForm(() => ({ id: `${Math.random()}`, name: value, isCompleted: false }));
	};

	const handleUpdate = (e, item) => {
		setOrgTodos((prev) => {
			let todoData = prev.map((data) => {
				if (data.id === item.id) {
					console.log('setTodos', item, e.target.checked)
					return {
						...item,
						isCompleted: e.target.checked
					}
				}
				return data;
			});
			setTodos(todoData);
			return todoData;
		});
	}

	const handleDelete = (item) => {
		console.log(item)
		setOrgTodos((prev) => {
			let todoData = prev.map((data) => {
				if(data.id === item.id) {
					return false;
				}
				return data;
			}).filter(data => !!data)
			setTodos(todoData);
			console.log(todoData);
			return todoData;
		});
	}

	const handleMode = () => {
		setIsDarkMode((prev) => !prev)
	}

	const handleFilterAll = () => {
		setTodos(() => orgTodos);
	}

	const handleFilterActive = () => {
		setTodos(() => orgTodos.filter((item) => !item.isCompleted))
	}

	const handleFilterCompleted = () => {
		setTodos(() => orgTodos.filter((item) => item.isCompleted))
	}

	return (
		<div className='wrapper'>
			<div className={`bg-white ${isDarkMode ? 'dark:bg-slate-800' : ''} rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}>

				<div className='space-x-4'>
					<button className='bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
					        onClick={handleMode}>{isDarkMode ? 'Dark' : 'White'}</button>
				<button className='bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
				        onClick={handleFilterAll}>ALL</button>
				<button className='bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 active:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
				        onClick={handleFilterActive}>Active</button>
				<button className='bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 active:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
				        onClick={handleFilterCompleted}>Completed</button>
				</div>
				<ul className='p-6 divide-y divide-slate-200'>
					{todos.map((item) => {
						return (
							<li className='flex py-4 first:pt-0 last:pb-0'
							    key={item.id}>
								<div className='space-x-4'>
								<label className={`text-base font-medium text-slate-900 tracking-tight`} htmlFor={item.id} style={item.isCompleted ? {textDecoration: 'line-through'} : {}}>
									<input id={item.id} type='checkbox' defaultChecked={item.isCompleted} onChange={(e) => {	handleUpdate(e, item) } } />
									{item.name}
								</label>
								<button onClick={() => { handleDelete(item) } }>์ญ์?</button>
								</div>
							</li>)
					})}
				</ul>
				<div>
					<form className='space-x-4' onSubmit={handleSubmit}>
						<label htmlFor='name'>ํ?์ผ:</label>
						<input type='text' id='name' name='name' value={form.name} onChange={handleAdd} />
						<button className='bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 active:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'>ADD</button>
					</form>
				</div>
			</div>
		</div>
	);
}
