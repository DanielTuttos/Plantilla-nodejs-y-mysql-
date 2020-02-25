const express = require('express');
const router = express.Router();
const Users = require('../models/user.model');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const users = await Users.getAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const body = req.body;
    body.password = bcrypt.hashSync(body.password, 10);


    Users.createUser(body).then((respuesta) => {
        body.password = ':(';
        res.status(200).json({
            ok: true,
            respuesta: body
        })
    }).catch(err => {
        res.status(400).json({
            ok: false,
            mensajeError: 'El email no puede estar duplicado',
            err
        })
    });


})

module.exports = router;