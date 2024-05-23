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


//Setto il server e lo creo 
const server = http.createServer((request, result) => {

})

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`)
})