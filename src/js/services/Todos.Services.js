import { URL_BASE } from "./User.Services"
// Funcion que agrega la tarea al usuario pasado como parametros.
export const addTask = async (userName, taskTitle) => {
    try {
        const taskToAdd = {
            label: taskTitle,
            is_done: false
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToAdd)
        };

        const responseData = await fetch(`${URL_BASE}/todos/${userName}`, requestOptions)
        const json = await responseData.json();
        if(!responseData.ok) {
            console.error(responseData.status);
            throw new Error(json);
        }
        return json;
    } catch (err) {
        console.error(`Lo siento hubo un error al cargar la tarea ${taskTitle} al usuario ${userName}. ${err}`)
    };
}


export const getTodo = async (userName, setTodoList) => {
    try {
        const responseData = await fetch(`${URL_BASE}/users/${userName}`);
        console.log(responseData);
        if(!responseData.ok) {
            console.error(responseData.status);
        };
        const data = await responseData.json();
        setTodoList(data.todos)
        return data;
    } catch (err) {
        console.error(`Lo siento, hubo un error al cargar el usuario. ${err}`)
    }
}

export const removeTask = async (todo_id, userName, setTodoList) => {
    try {

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };

        const responseData = await fetch(`${URL_BASE}/todos/${todo_id}`, requestOptions);
        if(!responseData.ok) {
            console.error(responseData.status);
        };
        await getTodo(userName, setTodoList);
        const json = await responseData.json();
        return json;

    } catch (err) {
        console.error(`Lo siento, hubo un error al borrar la tarea ${todo_id} del usuario. ${err}`);
    }
}
