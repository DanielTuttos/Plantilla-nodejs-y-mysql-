const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '09854041280942037847',
    port: process.env.DB_PORT || '3306',
    database: process.env.DB_NAME || 'node_users' 
});

global.db = pool;

// en case de Error por ER_NOT_SUPPORTED_AUTH_MODE does not support authentication protocol requested by server; consider upgrading MySQL client o algo parecido por favor ejecutar el siguiente comando en workbench

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'.