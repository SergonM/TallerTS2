import {Serie} from './serie.js';
import {Data} from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: number = 0;

renderSeriesInTable(Data);

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
