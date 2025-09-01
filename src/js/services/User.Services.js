 export const URL_BASE = 'https://playground.4geeks.com/todo'

// Tengo que agregar un usuario, con su nombre.
export const addUser = async (userName) => {
    try {
        // declarar metodo POST
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"} 
            }
        const responseData = await fetch(`${URL_BASE}/users/${userName}`);
        if(responseData.ok) {
            const json = await responseData.json();
            return json;    
        }
        // poner en una variable la respuesta del servido en formato json
        
        if(responseData.status === 404){
            const create = await fetch(`${URL_BASE}/users/${userName}`, requestOptions);
            const json = await create.json();
            if(!create.ok){
                throw new Error(`Error ${create.status}`)
            }};
        return [];
    } catch (err) {
        console.error(`Lo siento, hubo un error ${err}`)   
    };
};

export const getAllUsers = async () => {
    try {
        const responseData = await fetch(`${URL_BASE}/users`);
        if(!responseData.ok) {
            throw new Error(responseData.status);
        }

        const json = await responseData.json();
        return json;
        
    } catch (err) {
        console.log(`Hubo un error al obtener todos los usuarios ${err}`)
    }

}