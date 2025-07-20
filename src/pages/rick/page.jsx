
import { useState, useEffect } from "react"
import { getDataApi } from "../../utils/getdataapi"
import { filtrarPorTexto } from "../../utils/filtrarPorTexto"
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

            if (!respuesta || !respuesta.results) {
                console.error("Error al cargar la información");
                return;
            }

            setDatos(respuesta.results);


        };



        obtenerDatos();
    }, []);

    const filterCharacters = filtrarPorTexto(datos, "name", filter)
    return (
        <div className=" grid">
            <div className="flex justify-center">
                <Searchbar value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>

            <div className="flex justify-center items-center w-400 ">
                <h1 className="text-3xl font-bold text-center mb-6 text-amber-300 p-5 items-center">
                    Encuentra tu Personaje Favorito
                </h1>
            </div>

            <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCharacters.map(({ id, image, name, gender, status, origin, location }) => {
                        return (
                            <div className="p-3 hover:scale-105 transition-all duration-350 cursor-pointer" key={name}>
                                <div key={id} className="flex  items-center gap-10 p-10 shadow-lg rounded-xl bg-neutral-900  ">
                                    <img src={image} width={220} height={220} alt={name} />
                                    <div className=" felx-col gap-2">
                                        <h1 className="text-red-400">{name}</h1>
                                        <p> Sex: {gender}</p>
                                        <p>Status: {status}</p>
                                        <p>Origin:{origin.name}</p>
                                        <span className="text-purple-500"> Location:  {location.name}</span>

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