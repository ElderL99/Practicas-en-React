import "./page.css"
import { useState,useEffect } from "react"
import { getDataApi } from "../../utils/getdataapi"
import { filtrarPorTexto } from "../../utils/filtrarPorTexto"






export default function RickCard() {
    const [filter, setFilter] = useState('')
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        
        const obtenerDatos = async () => {
            const respuesta = await getDataApi("https://rickandmortyapi.com/api/character?limit=50");
            if (respuesta === undefined){
                console.log("error al cargar la informacion")
            }
            
            setDatos( respuesta.results);

            
        };

          

        obtenerDatos();
    }, []);
    
   const filterCharacters= filtrarPorTexto(datos, "name" , filter ) // funcion para filtrar la informacion
    
    return (
        <div className="mastercard">
            <form className="form-card">
                <h1>Encuentra tu Personaje Favorito</h1>
                <input className="search-bar" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </form>
            <div >
                <div className="card-container">
                    {filterCharacters.map((Personaje)=>{
                        return(
                            <div className="card" key={Personaje.name}>
                                <div key={Personaje.id}>
                                    <h1 className="name">{Personaje.name}</h1>
                                    <img src={Personaje.image} width={220} height={220} alt={Personaje.name}/>
                                    <p> Sex: {Personaje.gender}</p>
                                    <p>Status: {Personaje.status}</p>
                                    <p>Origin:{Personaje.origin.name}</p>
                                    <span> Location :{Personaje.location.name}</span>
                                    <p></p>


                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}