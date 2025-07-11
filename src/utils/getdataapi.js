export async function getDataApi(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
   
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]); 
      
    }

    return data;
  } catch (error) {
    console.error("Error al obtener la informacion:", error);
  }
}
