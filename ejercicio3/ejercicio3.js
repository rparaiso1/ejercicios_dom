/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

const Countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const listaPaises = document.createElement("ul");
listaPaises.className = "paises";

Countries.forEach((Country) => {
  const liCountry = document.createElement("li");
  liCountry.textContent = Country;
  listaPaises.appendChild(liCountry);
});
document.body.appendChild(listaPaises);

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
const RemoveMe = document.querySelectorAll(".fn-remove-me");
console.log(RemoveMe);
RemoveMe.forEach((element) => {
  element.remove();
});

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
console.log(cars);

const printHere = document.querySelector('[data-function="printHere"]');
printHere.className = "coches";
const listaCoches = document.createElement("ul");
cars.forEach((coches) => {
  const Licars = document.createElement("li");
  Licars.textContent = coches;
  listaCoches.appendChild(Licars);
});
printHere.appendChild(listaCoches);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/
const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

countries.forEach((country) => {
  const divs = document.createElement("div");
  document.body.appendChild(divs);
  divs.className = "divImg";

  const titleImagen = document.createElement("h4");
  titleImagen.textContent = country.title;

  const image = document.createElement("img");
  image.src = country.imgUrl;

  divs.appendChild(titleImagen);
  divs.appendChild(image);
});

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const BottonDelete = document.createElement("button");
document.body.appendChild(BottonDelete);
BottonDelete.textContent = "eliminar";
BottonDelete.className = "Boton";

BottonDelete.addEventListener("click", (ev) => {
  console.log(ev);
  const divs = document.querySelectorAll("div");
  if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const Divs = document.querySelectorAll(".divImg");

Divs.forEach((div) => {
  const BottonEliminar = document.createElement("button");
  BottonEliminar.className = "Bottondelete";
  BottonEliminar.textContent = "Eliminar este div";

  BottonEliminar.addEventListener("click", (ev) => {
    console.log(ev);
    div.remove();
  });
  div.appendChild(BottonEliminar);
});
