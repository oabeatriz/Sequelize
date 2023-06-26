// importação das bibliotecas
const database = require('./db');
const Cliente = require('./cliente');




// criação do servidor
const porta = 8080
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// renderizando com html

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);



// rota express



app.get('/', (req, res) => {
    res.send("<h1><strong>Bem vindo ao cadastro de clientes!</strong></h1>")
});

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get("/cadcliente", function(req, res){
res.sendFile(__dirname + '/formCliente.html');
});

app.post('/addcliente', function(req, res){
Cliente.create({
nome: req.body.nome,
nascimento: req.body.nascimento,
cidade: req.body.cidade,
telefone: req.body.telefone

})
.then(function(){
    res.send("Cliente cadastrado com sucesso!");
});
});

app.listen(porta, () => {console.log("SERVIDOR RODANDO")});


// sincronismo
(async() => {
    const database = require('./db');
    const Cliente = require('./cliente');
    try{
        const resultado = await database.sync();
        console.log(resultado)
        const clientes = await Cliente.findAll();
        console.log("Lista de clientes: \n", clientes);
    } catch(error){
     console.log(error);
    }
})();