
export const getAllData = async () => {
    try {
        const responseData = await fetch('https://playground.4geeks.com/todo/docs')
        if(!responseData.ok) {
            throw new Error(responseData.status);
        }
        const json = await responseData.json();
        console.log(json)
        return json
    } catch (err) {
        console.error(`Lo siento, hubo un error ${err}`)   
    };
};

export const addUser = async () => {
    
}
