import { Inter } from 'next/font/google'
import Porta from '../components/Porta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className} style={{display: 'flex'}}>
      <Porta selecionada/>
      <Porta />
    </div>
  )
}
