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
    newCountriesUl.innerHTML += `<li><h4>${country.title}</h4><img src='${country.imgUrl}'></li>`;
}

newDiv.appendChild(newCountriesUl);
document.body.append(newDiv);

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const button = document.createElement('button');
button.innerText = 'Borra el último elemento';

button.addEventListener('click', () => {
    const lastChild = newCountriesUl.lastElementChild;
    newCountriesUl.removeChild(lastChild);
})

document.body.append(button);

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

const newDiv2$$ = document.createElement('div');
document.body.appendChild(newDiv2$$)

for (const country of newCountries) {
    const list$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    const button$$ = document.createElement("button");

    button$$.innerText = 'Borra este elemento';
    img$$.setAttribute('src', country.imgUrl);

    button$$.addEventListener('click', () => remove(list$$));

    list$$.appendChild(h4$$);
    list$$.appendChild(h4$$);
    list$$.appendChild(button$$);
    divPadre$$.appendChild(list$$);
}

///////////////////////////////////////////////////////////////////////////////////////////

const myMain$$ = document.querySelector('main');

const getCharacters = async () => {
    const response = await fetch('https://starwars-server.vercel.app/characters');
    const res = await response.json();
    return res.data.characters;
}

const mapCharacters = (characters) => {
    return characters.map((character) => ({
        id: character._id,
        name: character.name,
        image: character.image,
        origin: character.origin,
        role: character.role
    }));
};

const drawCharacters = (characters) => {
    for (const character of characters) {

        let characterDiv = document.createElement('div');
        characterDiv.className = "main__div";

        let characterName = document.createElement('h1');
        characterName.textContent = character.name;

        let characterImage = document.createElement('img');
        characterImage.setAttribute('src', character.image);
        characterImage.setAttribute('alt', character.name);

        let characterRole = document.createElement('p');
        characterRole.textContent = character.role;

        let characterOrigin = document.createElement('p');
        characterOrigin.textContent = character.origin;

        characterDiv.appendChild(characterName);
        characterDiv.appendChild(characterImage);
        characterDiv.appendChild(characterRole);
        characterDiv.appendChild(characterOrigin);
    }
}

const drawInput = (characters) => {
    const input$$ = document.querySelector('input');
    input$$.addEventListener('input', () => searchCharacters(input$$.value, characters));
}

searchCharacters = (filtro, array) => {
    let filteredCharacters = array.filter((character) => 
    character.name.toLowerCasw().includes(filtro.toLowerCase())
    );
    
    drawCharacters(filteredCharacters);
}

const init = async () => {
    const characters = await getCharacters();
    const mappedCharacters = mapCharacters(characters);
    drawCharacters(mappedCharacters);
    drawInput(mappedCharacters);
};

init();

