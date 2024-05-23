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
const readJSONfile = (fileName) => {

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
const server = http.createServer((request, result) => {

})


//! feedback all'avvio del server 
server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`)
})