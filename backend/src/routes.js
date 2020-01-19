const {Router} = require('express'); //exporta o módulo de roteamento do express pra dentro desse arquivo.

const routes = Router(); //cria uma variavel, chamando uma função router do express.

routes.post('/users/:id',(request, response)=>{
    console.log(request.body);
    return response.json({message: 'OmniStak'});
});

//exporta as rotas daqui de dentro desse arquivo para que a index possa reconhecer.
module.exports = routes;