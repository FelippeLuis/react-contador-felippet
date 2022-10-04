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
    function Zerar () {
        setNumero (numero - numero)
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
        <button className="bnt" onClick={aumentar}>Mais</button>
        <button className="bnt" onClick={diminuir}>Menos</button>
        <button className="bnt" onClick={Zerar}>Zerar</button>
        </div>
        </div>
)
};
export default App;