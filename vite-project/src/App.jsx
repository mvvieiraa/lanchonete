import { useState } from 'react'
import './App.css'
import imgCombo1 from './assets/combo1.jpg'
import imgCombo2 from './assets/combo2.jpg'
import CardProduto from './components/CardProduto'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal')

  const dadosCombo = {
    casal: {
      imagem: imgCombo2,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 65,00',
      descricao: 'Dois hambúrgueres, duas porções de batata frita e dois refrigerantes.'
    },
    familia: {
      imagem: imgCombo1,
      titulo: 'Combo para 4 pessoas',
      preco: 'R$ 120,00',
      descricao: 'Quatro hambúrgueres, quatro porções de batata frita e quatro refrigerantes.'
    }
  }

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'familia' : 'casal')
  }

  const dados = dadosCombo[tipoCombo]

  return (
    <>
      <div className='container'>
        <h1>Escolha seu combo</h1>

        <button onClick={alterarCombo}>
          Mudar combo
        </button>

        <CardProduto
          imagem={dados.imagem}
          titulo={dados.titulo}
          preco={dados.preco}
          descricao={dados.descricao}
        />
      </div>
    </>
  )
}

export default App