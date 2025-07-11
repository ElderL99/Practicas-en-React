
import './App.css'
import ListadePokemones from './pages/pokelist'
import { useState } from 'react'

function App() {
  const [select, Setselect] = useState("pokemon")
  const pokemon = <ListadePokemones />
  const usuriarios = <h1>Aqui iran los Usuarios</h1>
  const post = <h1>Aqui iran los Post</h1>
  return (
    <div>
      <select className='selector' value={select} onChange={(e) => Setselect(e.target.value)}>
        <option value="pokemon">Pokémon</option>
        
        <option value="usuarios">Usuarios</option>
        
        <option value="posts">Posts</option>
        
       

      </select>

      {select === "pokemon" && <ListadePokemones />}
      {select === "posts" && <h1>Aquí irán los Post</h1>}{select === "usuarios" && <h1>Aquí irán los Usuarios</h1>}
    </div>
  )
}

export default App
