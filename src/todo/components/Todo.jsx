import React, {useState, useEffect} from 'react';

export default function Todo() {
	const [orgTodos, setOrgTodos] = useState([]);
	const [todos, setTodos] = useState([]);
	const [form, setForm] = useState({ id: `${Math.random()}`, name: '', isCompleted: false });

	useEffect(() => {
		console.log('useEffect todos 최초 호출', todos);
		const data = JSON.parse(localStorage.getItem('todos'));
		console.log(data);
		if (data && data.length > 0) {
			setTodos(data)
			setOrgTodos(data);
		}
		return () => {
			console.log('🧹 최초 호출 깨끗하게 청소하는 일들을 합니다.');
		};
	}, []);

		useEffect(() => {
			console.log('useEffect todos', {todos, orgTodos});
			return () => {
				console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
				if (orgTodos && orgTodos.length > 0) {
					localStorage.setItem('todos', JSON.stringify(orgTodos));
				}
			};
		}, [todos]);

	const handleSubmit = (e) => {
		console.log(form);
		e.preventDefault(); // submit 버튼을 누르면 페이지 refresh 되기 때문에 필요하지 않다면 해당 이벤트 넣기
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
		<div>
			<button onClick={handleFilterAll}>ALL</button>
			<button onClick={handleFilterActive}>Active</button>
			<button onClick={handleFilterCompleted}>Completed</button>
			<ul>
				{todos.map((item) => {
					return (
						<li key={item.id}>
							<label htmlFor={item.id} style={item.isCompleted ? {textDecoration: 'line-through'} : {}}>
								<input id={item.id} type='checkbox' defaultChecked={item.isCompleted} onChange={(e) => {	handleUpdate(e, item) } } />
								{item.name}
							</label>
							<button onClick={() => { handleDelete(item) } }>삭제</button>
						</li>)
				})}
			</ul>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>할일:</label>
					<input type='text' id='name' name='name' value={form.name} onChange={handleAdd} />
					<button>ADD</button>
				</form>
			</div>
		</div>
	);
}
