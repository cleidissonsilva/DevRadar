
const express = require ('express'); //importando o módulo express para ter accesso as suas funcionalidades.
const mongoose = require('mongoose');
const routes = require('./routes');

const  app  =  express(); 


mongoose.connect('mongodb+srv://keko:keko@cluster0-a0r10.mongodb.net/bdweek10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});


app.use(express.json()); 

app.use(routes);
app.listen(3333); 





