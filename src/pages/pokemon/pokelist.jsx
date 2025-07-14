import { getDataApi } from "../../utils/getdataapi.js";

import { filtrarPorTexto } from "../../utils/filtrarPorTexto";
import { useState } from "react";
import Navbar from "../../components/SearchBar.jsx";
import Searchbar from "../../components/SearchBar.jsx";



const data = await getDataApi("https://pokeapi.co/api/v2/pokemon?limit=50");


const detalles = await Promise.all(
  data.results.map(poke => getDataApi(poke.url))
);

export default function ListadePokemones() {
  const [search, setSearch] = useState('')
  const resultadosFiltrados = filtrarPorTexto(detalles, "name", search)
  return (
    <div className="max-w-3xl mx-auto p-4  ">

      <div className="flex justify-center shadow-3x2 ">
        <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-amber-300 p-5 items-center">
        Encuentra tu Pokémon Favorito
      </h1>

      <div className="grid grid-cols-2 gap-10">
        {resultadosFiltrados.map((resultadosFiltrados) => {

          return (
            <div
              key={resultadosFiltrados.id}
              className=" bg-neutral-900 shadow-md rounded-xl p-4 mb-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 w-100% h-50"
              id="card"
            >
              <img
                src={resultadosFiltrados.sprites.front_default}
                alt={resultadosFiltrados.name}
                width={300}
                height={300}
                className="rounded"
              />
              <div>
                <p className="text-xl font-bold capitalize text-blue-600">
                  {resultadosFiltrados.name}
                </p>
                <p className="text-sm text-gray-500">ID: {resultadosFiltrados.id}</p>
                <p className="text-sm text-gray-500">Peso: {resultadosFiltrados.weight}</p>
                <div>
                  <p className="text-sm font-semibold mt-2">Habilidades:</p>
                  <ul className="list-disc list-inside">

                    {resultadosFiltrados.abilities.map((item) => (
                      <li key={item.ability.name} className="text-sm text-gray-700 capitalize">
                        {item.ability.name}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          )

        })}
      </div>

    </div>
  )
}