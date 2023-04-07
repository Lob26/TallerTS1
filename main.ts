import {Serie} from "./serie";
import {data} from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series-table")!;
let seasonsAvg: HTMLElement = document.getElementById("seasons-average")!;

renderAll(data);
function renderTable(data: Serie[]): void {
    console.log("Renderizando la tabla");
    data.forEach(item => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${item.id}</td>
                           <td>${item.name}</td>
                           <td>${item.channel}</td>
                           <td>${item.seasons}</td>`
        seriesTable.appendChild(tableRow);
    });
}

function renderAvg(data: Serie[]): void {
    console.log("Renderizando el promedio");
    let seasonsQ: number = 0;
    let seriesQ: number = 0;
    data.forEach(item => {
        seasonsQ += item.seasons;
        seriesQ++;
    });
    seasonsAvg.innerHTML = `Promedio de temporadas: ${seasonsQ / seriesQ}`;
}

function renderAll(series: Serie[]): void {
    console.log("Desplegando todo");
    renderTable(series);
    renderAvg(series);
}
