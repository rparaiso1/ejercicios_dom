/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const BottonCLick = document.getElementById("btnToClick");
BottonCLick.className = "#btnToClick";
BottonCLick.addEventListener("click", (ev) => {
  console.log(ev);
});

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/
const input = document.getElementsByClassName("focus")[0];
input.addEventListener("focus", () => {
  console.log(input.value);
});
/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const Input = document.querySelector(".value");
Input.addEventListener("input", () => {
  console.log(Input.value);
});

/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbum = document.createElement("ul");
ulAlbum.className = "ulAlbum";

albums.forEach((albums) => {
  const liAlbum = document.createElement("li");
  liAlbum.textContent = albums;
  ulAlbum.appendChild(liAlbum);
});
document.body.appendChild(ulAlbum);
