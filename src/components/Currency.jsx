import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_GvqQ6ySLp0otCnNqoBwsdS9oFN18GIk9C1eKZ3fG"


function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

    }

    return (
        <div className='currency-div'>
            <div style={{ height: '50px', width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: '30px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />

                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowCircleRight style={{ fontSize: '20px' }} />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>

                </select>
                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className='result' />
            </div>
            <br></br>
            <div>
                <button
                    onClick={exchange}
                    style={{ backgroundColor: 'red', color: 'white', borderRadius: '10px', border: 'none', fontSize: '15px' }}>ÇEVİR</button>
            </div>
        </div>
    )
}

export default Currency