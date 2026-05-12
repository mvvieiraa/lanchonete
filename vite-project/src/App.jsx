import { useState } from 'react'
import './App.css'
import imgCombo1 from './assets/combo1.jpg'
import imgCombo2 from './assets/combo2.jpg'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'familia' : 'casal')
  }


const dadosCombo = {
casal: {
imagem: imgCombo2,
titulo: 'Combo para duas pessoas',
preco: 'R$ 65,00',
descricao: 'Dois hambúrgueres, duas porções de batata e dois refrigerantes.'
},

familia: {
imagem: imgCombo1,
titulo: 'Combo para 4 pessoas',
preco: 'R$ 120,00',
descricao: 'Quatro hambúrgueres, quatro porções de batata e quatro refrigerantes.'
}


}

return (
<>

<div className='container'>
<h1>Escolha seu combo</h1>
<button> Mudar combo</button>
</div>

</>


)
}

export default App

