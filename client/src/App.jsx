import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/layout/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>

      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </Layout>
     
    </>
  )
}

export default App
