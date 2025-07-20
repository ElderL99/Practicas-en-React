import { getDataApi } from "../../utils/getdataapi.js";
import { filtrarPorTexto } from "../../utils/filtrarPorTexto";
import { useState, useEffect } from "react";
import Searchbar from "../../components/SearchBar.jsx";

export default function ListadePokemones() {
  const [search, setSearch] = useState('');
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataApi("https://pokeapi.co/api/v2/pokemon?limit=100");
      const detalles = await Promise.all(
        data.results.map(poke => getDataApi(poke.url))
      );
      setDetalles(detalles);
    };

    fetchData();
  }, []);

  const resultadosFiltrados = filtrarPorTexto(detalles, "name", search);

  return (
    <div className="min-h-screen mx-auto p-4">
      <div className="flex justify-center shadow-3x2">
        <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-400">
        <h1 className="text-3xl font-bold text-center mb-6 text-amber-300 p-5 items-center">
          Encuentra tu Pokémon Favorito
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resultadosFiltrados.map(({ id, name, weight, sprites, abilities }) => (
          <div
            key={id}
            className="bg-neutral-900 shadow-md rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 w-full h-50"
          >
            <img
              src={sprites.front_default}
              alt={`Imagen de ${name}`}
              width={300}
              height={300}
              className="rounded"
            />
            <div>
              <p className="text-xl font-bold capitalize text-blue-600">{name}</p>
              <p className="text-sm text-gray-500">ID: {id}</p>
              <p className="text-sm text-gray-500">Peso: {weight}</p>
              <div>
                <p className="text-sm font-semibold mt-2">Habilidades:</p>
                <ul className="list-disc list-inside">
                  {abilities.map(({ ability }) => (
                    <li key={ability.name} className="text-sm text-gray-700 capitalize">
                      {ability.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
