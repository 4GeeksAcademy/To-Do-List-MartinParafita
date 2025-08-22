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
									setTodoList(todoList.concat(inputValue))
									addTask(userName,inputValue)
									setInputValue("")
								}
							}} placeholder="New Task..">
						</input> 
					</li>
					{todoList.map((t) => {
						console.log(t)
						return(
						<li  key={t.id} className=" tarea d-flex justify-content-between align-items-center my-2 rounded border">
							<div>
								<input
									type="checkbox" 
									className="m-2"
									checked={t.done}/>
								<span>
									{t.label}
								</span>
							</div>
							<button 
								className="delete btn btn-danger btn-sm float-end"
								onClick={() => {
									removeTask(t.id, userName, setTodoList);
									//setTodoList(prev => prev.filter((_, i) => i !== index));
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