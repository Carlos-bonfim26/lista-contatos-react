import { useState } from 'react'
import ListaDeContatos from './components/ListaDeContatos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ListaDeContatos/>
  )
}

export default App
