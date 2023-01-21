/* Iteración #1: Interacción con el DOM */

/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

for (const country of countries) {
    ulCountries.innerHTML += `<li>${country}</li>`;
}

document.body.append(ulCountries);
console.log(ulCountries);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const fnRemoveMe = document.querySelector('.fn-remove-me');

fnRemoveMe.remove();
console.log(fnRemoveMe);

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement('ul');

for (const car of cars) {
    ulCars.innerHTML += `<li>${car}</li>`;
}

const divPrintHere = document.querySelector("[data-function='printHere']");
divPrintHere.appendChild(ulCars);
console.log(ulCars);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const newCountries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const newDiv = document.createElement('div');
const newCountriesUl = document.createElement('ul');

for (const country of newCountries) {
    const newLi = document.createElement('li');
    newLi.classList.add('country-li');
    newLi.innerHTML = `<h4>${country.title}</h4><img src='${country.imgUrl}'>`;
    newCountriesUl.appendChild(newLi);
}

newDiv.appendChild(newCountriesUl);
document.body.appendChild(newDiv);

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const button = document.createElement('button');
button.innerText = 'Borra el último elemento';

button.addEventListener('click', () => {
    const lastChild = newCountriesUl.lastElementChild;
    newCountriesUl.removeChild(lastChild);
});

document.body.appendChild(button);

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

const countryLi = document.querySelectorAll('.country-li');

for (const li of countryLi) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Borra este elemento';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        li.remove();
    });
}
