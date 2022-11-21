import { useEffect } from 'react'
import { useRouter } from 'next/router'

import RootLayout from '../Layout/RootLayout'
import { routsNameMain } from '../data/routsName'

function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace(routsNameMain.home)
  }, [])

  return (
    <main>
      <h1>Bem-Vindo</h1>
    </main>
  )
}

Home.layout = RootLayout

export default Home
