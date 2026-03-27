import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Botonclic from './components/botonclic'
import Contador from './components/contador'
import Titulo from './components/titulo'
import Nombre from './components/nombre'
import Parrafo from './components/parrafo'
import Mensaje from './components/mensaje'


function App() {
  const [clics, setClics] = useState(0)

/*Exportamos Patra que Muestre Todas las Etiquetas*/
  return(
    <div>
      <Titulo/>
      <Contador clics={clics}/>
      <Botonclic onClick={() => setClics(prev => prev +1)}/>

      <Nombre/>
      <Parrafo/>
      <Mensaje/>
    </div>
  )
 
}


export default App
