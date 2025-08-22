import React, { useEffect, useState } from "react";
import { addTask, removeTask, getTodo } from "../services/Todos.Services";
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todoList, setTodoList] = useState([])
	const [done, setDone] = useState(false)
	const userName = "Martin"
	useEffect(() => {
		getTodo(userName, setTodoList)
	}, [])
	console.log(todoList)
	return (
		<div className="container d-flex align-items-center justify-content-center mt-4">
			<div className="fs-4 col-10 bg-light d-flex flex-column  justify-content-center  p-3 border rounded">
				<h1>To Do List</h1>
				<ul>
					<li>
						<input 
							type="text"
							onChange={e => setInputValue(e.target.value)}
							value={inputValue}                                       
							onKeyDown={ async (e) => {
								if(e.key === "Enter") {
									const text = inputValue.trim();
									if(!text) return;
									const created = await addTask(userName, text);
									setTodoList(prev => [...prev, created]);
									setInputValue("")
								};
							}} placeholder="New Task..">
						</input> 
					</li>
					{todoList.map((t) => {
						return(
						<li  key={t.id} className=" tarea d-flex justify-content-between align-items-center my-2 rounded border">
							<div>
								<input
									type="checkbox" 
									className="m-2"
									checked={t.is_done}/>
								<span>{t.label}</span>
							</div>
							<button 
								className="delete btn btn-danger btn-sm float-end"
								onClick={async () => {
									removeTask(t.id, userName, setTodoList);
								}}>
								X
							</button>
						</li>)
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;