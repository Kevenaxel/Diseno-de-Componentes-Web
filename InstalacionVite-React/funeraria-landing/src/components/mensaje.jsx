import {useState} from "react";

function PedirMensaje(){
    const [mensaje, setMensaje] = useState("");

    return (
        <div>
            <h2>Escribe Un Mensaje:</h2>
            
            <input
            type="text"
            placeholder="Escribe Aqui..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            
            />

            <p>Mensaje: {mensaje}</p>
        </div>
    )
}


export default PedirMensaje;