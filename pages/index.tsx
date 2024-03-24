import { Inter } from 'next/font/google'
import styles from '../styles/Formulario.module.css'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Formulario() {

    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)
    
    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
                </Cartao>

                <Cartao bgcolor="#28a085">
                    <div className={styles.link}>
                        <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
                            <h2 className={inter.className}>Iniciar</h2>
                        </Link>
                    </div>
                </Cartao>

            </div>
        </div>
    )
}