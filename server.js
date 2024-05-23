const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

// fs è un modulo di Node.js che sta per "File System". 
// È un modulo nativo che fornisce un'API per interagire con il file system del computer. 
// Questo modulo permette di eseguire operazioni come leggere, scrivere, aggiornare, eliminare file e directory, e molto altro.
const fs = require("fs");

// path è un modulo nativo di Node.js che fornisce utility per lavorare con percorsi di file e directory. 
// È particolarmente utile per gestire i percorsi in modo indipendente dal sistema operativo, poiché i separatori di percorso differiscono tra Windows (\) e Unix-like (/) sistemi.
const path = require("path");


//! La funzione readJSONfile che hai scritto legge un file JSON dal file system e restituisce i suoi contenuti come un oggetto JavaScript
const readJSONData = (fileName) => {

    //determino il path del file
    const filePath = path.join(__dirname, fileName + '.json');

    // leggo il contenuto del file
    const fileData = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(fileData);
}

//! La funzione writeJSONData che hai scritto salva un oggetto JavaScript come un file JSON
const writeJSONData = (fileName, newData) => {

    //determino il path del file
    const filePath = path.join(__dirname, fileName + '.json');

    //setto l'oggetto Javascript da strasformare in stringa JSON
    const fileString = JSON.stringify(newData);

    // scrittura della stringa JSON nel file di destinazione
    fs.writeFileSync(filePath, fileString);
}

//! Setto il server e lo creo 
const server = http.createServer((request, response) => {

    // lettura del contenuto del file JSON
    const chuck = readJSONData('norrisDB');

    switch (request.url) {
        case '/favicon.ico':
            response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            response.end();
            break;
        case '/':
            // Il metodo writeHead è utilizzato in Node.js per impostare lo stato e gli header della risposta HTTP
            response.writeHead(200, { "content-Type": "text/html; charset=utf-8" });

            // chiamo l'api e prendo la risposta 
            fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())
                .then(chuckPhrase => {
                    console.log(chuckPhrase)
                    let fileHtml = '<ul>';
                    fileHtml += `<li>${chuckPhrase.value}</li>`;
                    fileHtml += '</ul>';
                    response.end(fileHtml);
                })
            break;
    }
})


//! feedback all'avvio del server 
server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`)
})