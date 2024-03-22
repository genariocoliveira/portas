import styles from '../../../styles/Jogo.module.css'
import { Inter } from 'next/font/google'
import Porta from '../../../components/Porta'
import PortaModel from '../../../model/porta'
import { useEffect, useState } from 'react'
import { atualizarPortas, criarPortas } from '../../../functions/portas'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
export default function jogo() {
    const  router = useRouter()
    // const [p1, setP1 ] = useState(new PortaModel(1))

    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])


    // console.log(criarPortas(3, 2))

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div className={inter.className} id={styles.jogo}>
            {/* <Porta value={ p1 } onChange={novaPorta => setP1(novaPorta)}/> */}
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}
