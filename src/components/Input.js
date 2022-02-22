import React from 'react';
import './index.css';

export default function Input({value, handleInput})
{
    return(
        <div className="input-container">
            <input input={value} onChange={handleInput}/>
        </div>
    )
}