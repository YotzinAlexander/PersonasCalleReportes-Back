
const express = require('express');
require('dotenv').config();
var cors = require('cors');


const {dbConnection, dbConnectionOracle} = require('./database/config');

// crear servidor de express
const app = express();
const http = require ("http");
const {Server} = require("socket.io");


const server = http.createServer(app);

const io  = new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
    }
});

io.on('connection', (socket) => { /* … */
    // console.log(`Cliente Conectado 1 ${socket.id} `)

    socket.on("sendEvento", (payload) => {
        console.log('llegaSOKECT')

        socket.broadcast.emit("cambio_estado",payload)
    });

});



// console.log(process.env);



// lectura y parseo del body

app.use(express.json());

// directorio public

app.use( express.static('public'))

// CORS

app.use(cors())

// rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: auth // crear //login //renew
// TODO: CRUD: Eventos

// Conexion a base de datos Oracle
// dbConnectionOracle()
// levantar base de datos
dbConnection()


//escuchar peticiones

server.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});




