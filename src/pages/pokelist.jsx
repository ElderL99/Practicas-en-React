import { getDataApi } from "../utils/getdataapi";
import "./pokelist.css"
import { filtrarPorTexto } from "../utils/filtrarPorTexto";
import { useState } from "react";



const data = await getDataApi("https://pokeapi.co/api/v2/pokemon?limit=300");
console.log(data)

const detalles = await Promise.all(
  data.results.map(poke => getDataApi(poke.url))
);

console.log(detalles)




export default function ListadePokemones() {
  const [search, setSearch] = useState('')
  const resultadosFiltrados = filtrarPorTexto(detalles, "name", search)
  return (
    <div className="card-container">
      <form className="form-card">
        <h1>Encuentra tu Pokemon Favorito</h1>
        <input className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      {resultadosFiltrados.map((resultadosFiltrados) => {

        return (
          <div >

            <div className="card" key={resultadosFiltrados.name}>

              <p id="name">{resultadosFiltrados.name}</p>
              <img src={resultadosFiltrados.sprites.front_default} alt={resultadosFiltrados.name} width={320} height={320} />
              <div className="category">

                <p> Id {resultadosFiltrados.id}</p>
                <p> weight {resultadosFiltrados.weight}</p>
                {resultadosFiltrados.abilities.map((item) => (
                  <p key={item.ability.name}>{item.ability.name}</p>)
                )}

              </div>




            </div>
          </div>

        )

      })}
    </div>
  )
}