console.log("hola");

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
console.log(divVacio);
document.body.appendChild(divVacio);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divMasParrafo = document.createElement("div");
divMasParrafo.innerHTML = `<p>EL PARRAFO</p>`;
document.body.appendChild(divMasParrafo);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevoDiv = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const parrafos = document.createElement("p");
  parrafos.textContent = `Este es el párrafo número ${i}`;
  nuevoDiv.appendChild(parrafos);
  console.log(parrafos);
  document.body.appendChild(nuevoDiv);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const Dinamico = document.createElement("p");
Dinamico.innerHTML = `<p>Soy dinamico!</p>`;
document.body.appendChild(Dinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const textoRaro = document.querySelector(".fn-insert-here");
textoRaro.textContent = "Wubba Lubba dub dub";
console.log(textoRaro);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
console.log(apps);
const listaApps = document.createElement("ul");
apps.forEach((apps) => {
  const liElement = document.createElement("li");
  liElement.textContent = apps;
  listaApps.appendChild(liElement);
});
document.body.appendChild(listaApps);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const RemoveMe = document.querySelectorAll(".fn-remove-me");
console.log(RemoveMe);
RemoveMe.forEach((element) => {
  element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const Parrafo = document.createElement("p");
Parrafo.textContent = "Voy en Medio!";
const Divs = document.querySelectorAll("div");
Divs[0].insertAdjacentElement("afterend", Parrafo);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here//
const divs = document.querySelectorAll(".fn-insert-here");
divs.forEach((divs) => {
  const P_element = document.createElement("p");
  P_element.textContent = "Voy dentro!";
  divs.appendChild(P_element);
});
