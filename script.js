const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function obtenerTragoAleatorio() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      
      const trago = data.drinks[0];

     
      const nombreTrago = trago.strDrink;
      const imagenTrago = trago.strDrinkThumb;
      const instrucciones = trago.strInstructions;

     
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = `
        <h2>${nombreTrago}</h2>
        <img src="${imagenTrago}" alt="${nombreTrago}">
        <p>Instrucciones: ${instrucciones}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


obtenerTragoAleatorio();

