import { Inter } from 'next/font/google'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '../functions/portas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  // const [p1, setP1 ] = useState(new PortaModel(1))

  const [ portas, setPortas ] = useState(criarPortas(3,2)) 

  console.log(criarPortas(3,2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={ porta } 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/> 
    })
  }

  return (
    <div className={inter.className} style={{display: 'flex'}}>
      {/* <Porta value={ p1 } onChange={novaPorta => setP1(novaPorta)}/> */}
      { renderizarPortas() }
    </div>
  )
}