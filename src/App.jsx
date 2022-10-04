import { useState } from 'react';
import './App.css';

function App() {
    
    const [numero, setNumero] = useState(0);

    function aumentar () {
        setNumero (numero + 1)
    }
    function diminuir () {
        setNumero (numero - 1)
    }
    
    return (
        <div>
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
        </div>
        <div className='borda'>
        <p>{numero}</p>
        <button onClick={aumentar}>mais</button>
        <button onClick={diminuir}>menos</button>
        </div>
        </div>
)
};
export default App;