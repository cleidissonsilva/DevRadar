// o express é uma espécie de micrro framework que tem a finalidade de ajudar na criação das rotas.
const express = require ('express'); //importando o módulo express para ter accesso as suas funcionalidades.

const  app  =  express(); //criando a aplicação - a localhost
app.use(express.json()); //fala para o express que será utilizado o json.

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

app.post('/users/:id',(request, response)=>{
    console.log(request.body);
    return response.json({message: 'curso omniStak 19-01-2020'});
});

app.listen(3333); //a porta do servvidor


