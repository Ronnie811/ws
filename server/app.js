const express = require("express");
const app = express();


app.get('/DevOps2', (req, res) => {
    res.send("This is our main endpoint5!");
})

app.listen(8081, () =>{
    res.send("Up and running! -- This is our books service");
    console.log("Up and running! -- This is our books service");
})

