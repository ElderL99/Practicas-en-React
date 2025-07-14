
import ListadePokemones from './pages/pokemon/pokelist.jsx'
import RickCard from './pages/rick/page.jsx'
import { useState } from 'react'


export default function App() {
  const [select, Setselect] = useState("pokemon")


  return (
    <div className='flex justify-center gap-10 p-10'>

      <div>
        <select className='purple-glow-input' value={select} onChange={(e) => Setselect(e.target.value)}>
          <option value="pokemon">Pokémon</option>
          <option value="rick">Rick</option>
         </select>
      </div>

      <div>
        {select === "pokemon" && <ListadePokemones />}
        {select === "rick" && <RickCard />}
      </div>




    </div>
  )
}

