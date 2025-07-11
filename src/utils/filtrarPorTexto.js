export const filtrarPorTexto = (array, propiedad, texto) => {
  return array.filter((item) =>
    item[propiedad].toLowerCase().includes(texto.toLowerCase().trim())
  );
};
