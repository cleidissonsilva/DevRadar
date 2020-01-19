// o express é uma espécie de micrro framework que tem a finalidade de ajudar na criação das rotas.
const express = require ('express'); //importando o módulo express para ter accesso as suas funcionalidades.
const mongoose = require('mongoose');
const routes = require('./routes');

const  app  =  express(); //criando a aplicação - a localhost

//esse link faz a conexao com o BD. (configura o user e senha e coloca o nome do bd)
mongoose.connect('mongodb+srv://keko:keko@cluster0-a0r10.mongodb.net/bdweek10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

//Sempre colocar antes das rotas
app.use(express.json()); //fala para o express que será utilizado o json.

app.use(routes);
app.listen(3333); //a porta do servvidor

/*principais métodos HTTP: 
GEt-> busca uma informação;
POST-> criar alguma informação
PUT-> editar um recurso da aplicação
DELETE-> deletar
*/
/* Tipos de parâmetros:
Qyery Params: maioria das vezes utilizado no método GET. request.query (Filtros, ordenação, paginação, ...);
Route Params: usado no put ou delete - request.params (Identificar um  recurso na alteração ou remoção ) 
*/




