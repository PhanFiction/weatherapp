import React, {useState} from 'react';
import Input from './components/Input.js';
import Weather from './components/Weather.js';
import Forecast from './components/Forecast.js';
import './components/index.css';

export default function App()
{
    const [word, setWord] = useState('');
    
    const handleInput = (event) => {
        setWord(event.target.value.toLowerCase());
    }

    return(
        <div className="container">
            <div className="wrapper">
                <Input value={word} handleInput={handleInput}/>
                <Weather city={word}/>
                <Forecast city={word}/>
            </div>
        </div>
    );
}