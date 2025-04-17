// importo express e router
const express = require('express');  
const router = express.Router();  

// importo variabile posts
const posts = require('posts')

// index
router.get('/', (req, res) => {
    res.send('lista dei post')
});

// show
router.get('/:id', (req, res) => {
    res.send('visualizzo il singolo post con id:' + req.params.id)
});

// create
router.post('/', (req, res) => {
    res.send('creo un nuovo elemento')
});

// update
router.put('/:id', (req, res) => {
    res.send('mdifico il post con id:' + req.params.id)
});

// delete
router.delete('/:id', (req, res) => {
    res.send('elimino il post con id:' + req.params.id)
});

// esporto il router
module.export = router;