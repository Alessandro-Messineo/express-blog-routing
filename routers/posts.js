// importo express
const express = require("express");

// settiamo il router
const router = express.Router();

// index
router.get('/', function (req, res) {
    res.send('Lista dei post');
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del post ' + req.params.id);
});
// create
router.post('/', function (req, res) {
    res.send('Creazione di un post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esporto router
module.exports = router;