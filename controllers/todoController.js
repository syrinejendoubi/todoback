const express = require('express');
const { Todo } = require('./../models/todo');

var app = express();

app.get('/',(req,res)=> { res.status(200).send({message: 'welcome to todo controller'})
})

app.post('/add', (req, res) => {
    let data = req.body;
    let todo = new Todo({
        description: data.description,
        idUser: data.idUser
        
    })

    todo.save().then((todoFromdb) => {
        console.log(todoFromdb);
        res.status(200).send({ message: "todo enregistré avec succés" })
    }).catch((erreur) => {
        res.status(400).send(erreur)
    })
})

app.get('/login', (req, res) => {
    res.status(200).send({ message: 'Login worksr' })
})

module.exports = app