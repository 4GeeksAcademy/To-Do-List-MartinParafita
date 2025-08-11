import React, { useState } from "react";

const Task = ({id, text, onToggle, done, remove}) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Aquí va la lógica que quieres ejecutar al presionar Enter
      
      console.log('Enter key pressed!');
      // Por ejemplo, podrías llamar a una función para enviar un formulario
      // handleSubmit();
    }
  };

    
    return (
        <div>
            <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <input type="text" onKeyDown={handleKeyDown} placeholder="Escribe algo y presiona Enter"/>
        </div>
    );
};
export default Task;