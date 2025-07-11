import './App.css'
import ListadePokemones from './pages/pokemon/pokelist.jsx'
import RickCard from './pages/rick/page.jsx'
import { useState } from 'react'


function App() {
  const [select, Setselect] = useState("pokemon")


  return (
    <div className='container'>
      <select className='selector' value={select} onChange={(e) => Setselect(e.target.value)}>
        <option value="pokemon">Pokémon</option>

        <option value="rick">Rick</option>

        <option value="posts">Posts</option>



      </select>

      {select === "pokemon" && <ListadePokemones/> }
      {select=== "rick" && <RickCard />}
      {select === "posts" && <h1>Aquí irán los Post</h1>}
      
    </div>
  )
}

export default App
