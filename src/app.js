const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config()
require('./db');

// inicializacion de variables
const app = express();
const port = process.env.PORT || 5500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// importar ruta
const routeUsers = require('./routes/users.routes');

// rutas
app.use('/api/usuario', routeUsers);

// servidor
app.listen(port, () => {
    console.log('En puerto ', port, ' online');
})