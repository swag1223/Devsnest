const express = require("express");
const app = express();

//CRUD -> POST , GET , PUT , DELETE

app.get('/', (req, res) => {
    res.send("Devsnest , AsyncTeam OP");
});

//res.send is very generic for specificity we can use res.json and other properties
app.get("/json", (req, res) => {
  res.json({ swag: 1 });
});

app.get("/status", (req, res) => {
  res.sendStatus(500);
// res.status(200).send("sab theek h !!")
});


app.get('/query', (req, res) => {
    res.send(req.query);
    // res.send(req.query.swag);   
});

app.get("/ab?cd", (req, res) => {
  res.send("only 1 b may or may not be present");
});

app.get("/ab+cd", (req, res) => {
  res.send("for any number of b 'eeeeeeeeeesssszzz i.e. more than one");
});

app.get("/ab*cd", (req, res) => {
  res.send("For a(anything after ab and before cd)cd");
});

app.get(/.*swag$/, (req, res) => {
    res.send("end pe swag aana chahiye... !! dekhh re ho swag ki importance ..")
});

app.get("/songs/:songName/singer/:singerName", (req, res) => {   
    //res.send(req.params);
    //const { song, singer } = req.params
    if (req.params.singerName === 'bts') res.send("WOW !!");
    else res.send("NOT WOW!!")

});


app.listen(5000);