import React, { useState } from "react";
import List from './List'
const InputTask = ({onToggle, done, remove}) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        
    }}

  };

    
    return (
        <div>
            <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Escribe una nueva tarea..."/>
        </div>
    );
};
export default InputTask;