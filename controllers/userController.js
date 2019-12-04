const express = require('express');
const bcrypt=require('bcrypt');
const { User } = require('./../models/user');
const { mongoose } = require('./../db/config');

var app = express()

app.post('/register', (req, res) => {
    let data = req.body;
    let user = new User({
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
        password: bcrypt.hashSync(data.password,13)
    })
    user.save().then((userFromdb) => {
        console.log(userFromdb);
        res.status(200).send({ message: "utilisateur enregistré avec succés" })
    }).catch((erreur) => {
        res.status(400).send(erreur)
    })
})

app.get('/login', (req, res) => {
    res.status(200).send({ message: 'Login worksr' })
})

module.exports = app