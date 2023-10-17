import { Data } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = 0;
renderSeriesInTable(Data);
function renderSeriesInTable(series) {
    console.log("Leyendo series...");
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "<th>".concat(serie.num, "</th>\n                                <td class=\"text-primary\">").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        averageSeasons += serie.seasons;
        console.log("Serie ".concat(serie.num, " leida"));
    });
    averageSeasons /= series.length;
    document.getElementById("average").innerHTML = "Seasons Average: ".concat(averageSeasons);
    console.log("Lectura terminada");
}
