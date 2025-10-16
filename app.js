// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;

app.use(express.static('public'));

// rotta di default
app.get("/",(req, res) =>{
    res.send(`<h1> Server del mio blog </h1>`)
})

// rotta della bacheca
app.get("/bacheca",(req, res) =>{
    
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
