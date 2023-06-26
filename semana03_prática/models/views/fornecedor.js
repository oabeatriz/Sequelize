const { Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'dados.sqlite'
});

// dados para tabela

class Dados extends Model{
    static init(sequelize){
        super.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            llowNull:  false
        }



        }, {sequelize, modelName: 'Dados', tableName: 'dados'}); 
    }
}

Dados.init(sequelize);


//  importação do express
const porta = 8080
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao sistema de cadastro!</h1>');
});

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + '/formFornecedor.html');
    });

app.post('/addfornecedor', function(req, res){
    Dados.create({

        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        id: req.body.id

    })
    .then(function(){
        res.send('Fornecedores cadastrados.');
    });
});



app.listen(porta, () => {console.log("SERVIDOR RODANDO")});


(async () => {
    try {
       await sequelize.sync({force: true});
       console.log("Dados tabelados com sucesso.");
       const clientes = await Dados.findAll();
        console.log("Lista de clientes: \n", clientes);
    } catch (error) {
      console.error("Dados não foram tabelados. Tente novamente!");
    }
}) ();
