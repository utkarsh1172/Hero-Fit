import '@/styles/globals.css'
import { Rubik } from 'next/font/google'


const font = Rubik({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps}/>
    </main>
  )
}
