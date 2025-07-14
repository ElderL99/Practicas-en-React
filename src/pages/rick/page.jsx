
import { useState, useEffect } from "react"
import { getDataApi } from "../../utils/getdataapi"
import { filtrarPorTexto } from "../../utils/filtrarPorTexto"
import Navbar from "../../components/SearchBar"
import Searchbar from "../../components/SearchBar"

export default function RickCard() {
    const [filter, setFilter] = useState('')
    const [datos, setDatos] = useState([]);

    useEffect(() => {

        const obtenerDatos = async () => {
            const respuesta = await getDataApi("https://rickandmortyapi.com/api/character?limit=50");
            if (respuesta === undefined) {
                console.log("error al cargar la informacion")
            }

            setDatos(respuesta.results);


        };



        obtenerDatos();
    }, []);

    const filterCharacters = filtrarPorTexto(datos, "name", filter)

    return (
        <div className="grid">
            <div className="flex justify-center">
                <Searchbar value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>

            <div>
                <h1 className="text-3xl font-bold text-center mb-6 text-amber-300 p-5 items-center">
                    Encuentra tu Pokémon Favorito
                </h1>
            </div>

            <div >
                <div className="grid grid-cols-2 ">
                    {filterCharacters.map((Personaje) => {
                        return (
                            <div className="p-3 hover:scale-105 transition-all duration-350 cursor-pointer" key={Personaje.name}>
                                <div key={Personaje.id} className="flex  items-center gap-10 p-10 shadow-lg rounded-xl bg-neutral-900  ">
                                    <img src={Personaje.image} width={220} height={220} alt={Personaje.name} />
                                    <div className=" felx-col gap-2">
                                        <h1 className="text-red-400">{Personaje.name}</h1>
                                        <p> Sex: {Personaje.gender}</p>
                                        <p>Status: {Personaje.status}</p>
                                        <p>Origin:{Personaje.origin.name}</p>
                                        <span className="text-purple-500"> Location:  {Personaje.location.name}</span>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}