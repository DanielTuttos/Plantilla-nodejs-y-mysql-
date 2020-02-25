const mysql = require('mysql');


const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, users) => {
            if (err) reject(err)
            resolve(users);
        });
    });
};

const createUser = ({ nombre, password, email }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (user_nombre, user_email, user_password) VALUES (?,?,?)', [nombre, email, password], (err, respuesta) => {
            if (err) {
                return reject(err)
            };
            if (respuesta) {
                return resolve(respuesta);
            }
        })
    })
}

const getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM WHERE user_email=?', [email], (err, respuesta) => {
            if (err) {
                return reject(err)
            };
            if (respuesta) {
                return resolve(respuesta);
            }
        })
    })
}

module.exports = {
    getAll,
    createUser, 
    getByEmail
}