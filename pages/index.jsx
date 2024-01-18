import { Inter } from 'next/font/google'
import Presente from '../components/Presente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Presente />
    </div>
  )
}
