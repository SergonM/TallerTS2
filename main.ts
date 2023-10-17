import {Serie} from './serie.js';
import {Data} from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const tablaDatos: HTMLElement = document.getElementById("tabla-datos")!;
const containerCard: HTMLElement = document.getElementById("container-card")!;
let averageSeasons: number = 0;

renderSeriesInTable(Data);

tablaDatos.addEventListener("click", function(event){
    const activeElement = event.target as HTMLElement;

    if (activeElement.tagName == "TH" || activeElement.tagName == "TD"){
        const fila = activeElement.parentElement as HTMLTableRowElement;
        const id = fila.cells[0].textContent;

        console.log(`Fila ${id} seleccionada`);

        Data.forEach((serie) => {
            if (id !== null && parseInt(id) === serie.num){
                let selectedSerie: Serie = serie;
                mostrarSerie(selectedSerie);
            }
        });
    }
});


function mostrarSerie(selectedSerie: Serie){
    // Se define el estilo de la tarjeta
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    // Se define el contenido de la tarjeta
    card.innerHTML = `<img class="card-img-top" src="${selectedSerie.img}" alt="Img">`

    // Creacion del card body
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Creacion del contenido del body
    cardBody.innerHTML =   `<h5 class="card-title" style="font-weight: bold;">${selectedSerie.name}</h5>
                            <p class="card-text">${selectedSerie.description}</p>
                            <a href="${selectedSerie.url}" target="_blank">${selectedSerie.url}</a>`

    // Se añade el body a la tarjeta
    card.appendChild(cardBody);

    // Se limpia el contenedor
    containerCard.innerHTML = "";

    // Se añade la tarjeta al contenedor
    containerCard.appendChild(card);
}


function renderSeriesInTable(series: Serie[]): void{
    console.log("Leyendo series...");
    series.forEach((serie) => {
        let trElement = document.createElement('tr');

        trElement.innerHTML =  `<th>${serie.num}</th>
                                <td class="text-primary">${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;

        seriesTbody.appendChild(trElement);
        averageSeasons += serie.seasons;
        console.log(`Serie ${serie.num} leida`);
    });

    averageSeasons /= series.length;

    document.getElementById("average")!.innerHTML = `Seasons Average: ${averageSeasons}`;

    console.log("Lectura terminada");
}

