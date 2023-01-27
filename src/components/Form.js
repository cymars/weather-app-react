import { useState } from "react";
import axios from 'axios';


const Form = ({ setInfo, setState }) => {
    const [city, setCity] = useState('');


    const handleChange = async () => {
        const api = '522bef24051e70ab82695d3d6d6652ee';
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
        await axios(baseURL).then(res => setInfo(res.data));
        setState(true);
    }
    const onClear = () => {
        setCity("");
    };
    return (

        <div className="form">
            <h1 className="h1">Weather App</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleChange() }}>
                <div className='form2'>
                    <input value={city} onChange={(event) => setCity(event.target.value)} className='inputText' type='text' placeholder="Enter the city" />

                    <button onClick={onClear} type='button' className="btnDelete"> Delete </button>
                </div>
                <div className='btnDiv'>
                    <button type="submit" className="btn">Enter</button>
                </div>
            </form>
        </div>
    )


}
export default Form;