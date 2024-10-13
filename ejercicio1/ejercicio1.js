console.log("hola");

//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const BotonShowme = document.querySelector(".showme");
console.log(BotonShowme);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const Pillado = document.querySelector("h1");
console.log(Pillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const TodosLosP = document.querySelectorAll("p");
console.log(TodosLosP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const ClasePokemon = document.querySelectorAll("class.pokemon");
console.log(ClasePokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const testMe3 = testMe[2];
console.log(testMe3);
