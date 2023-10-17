import { Data } from './data.js';
var seriesTbody = document.getElementById('series');
var tablaDatos = document.getElementById("tabla-datos");
var containerCard = document.getElementById("container-card");
var averageSeasons = 0;
renderSeriesInTable(Data);
tablaDatos.addEventListener("click", function (event) {
    var activeElement = event.target;
    if (activeElement.tagName == "TH" || activeElement.tagName == "TD") {
        var fila = activeElement.parentElement;
        var id_1 = fila.cells[0].textContent;
        console.log("Fila ".concat(id_1, " seleccionada"));
        Data.forEach(function (serie) {
            if (id_1 !== null && parseInt(id_1) === serie.num) {
                var selectedSerie = serie;
                mostrarSerie(selectedSerie);
            }
        });
    }
});
function mostrarSerie(selectedSerie) {
    // Se define el estilo de la tarjeta
    var card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    // Se define el contenido de la tarjeta
    card.innerHTML = "<img class=\"card-img-top\" src=\"".concat(selectedSerie.img, "\" alt=\"Img\">");
    // Creacion del card body
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    // Creacion del contenido del body
    cardBody.innerHTML = "<h5 class=\"card-title\" style=\"font-weight: bold;\">".concat(selectedSerie.name, "</h5>\n                            <p class=\"card-text\">").concat(selectedSerie.description, "</p>\n                            <a href=\"").concat(selectedSerie.url, "\" target=\"_blank\">").concat(selectedSerie.url, "</a>");
    // Se añade el body a la tarjeta
    card.appendChild(cardBody);
    // Se limpia el contenedor
    containerCard.innerHTML = "";
    // Se añade la tarjeta al contenedor
    containerCard.appendChild(card);
}
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
