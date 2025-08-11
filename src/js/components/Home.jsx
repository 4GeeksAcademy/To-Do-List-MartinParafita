import React, { useState } from "react";
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todoList, setTodoList] = useState([])
	const [done, setDone] = useState(false)
	return (
		<div className="container bg-light">
			<h1>To Do List</h1>
			<ul>
				<li >
					
					<input 
					type="text"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if(e.key === "Enter") {
							setTodoList(todoList.concat(inputValue))
							setInputValue("")
						}
					}} placeholder="New Task.."></input>
				</li>
				{todoList.map((t, index) => (
					<li key={index} className="d-flex justify-content-between align-items-center mb-2">
						<div>
							<input 
							type="checkbox" 
							className="me-3"
							checked={done}
							onChange={() => setDone(!done)} />
							<span style={{textDecoration: done ? 'line-through' : 'none'}}>
								{t}
							</span>
						</div>
						<button 
						className="btn btn-danger btn-sm float-end"
						onClick={() => setTodoList(prev => prev.filter((_, i) => i !== index))}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;