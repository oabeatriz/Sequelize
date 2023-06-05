const { Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "manipulacao2.sqlite"

});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
        },

        conteudo: {
            type: Sequelize.TEXT
        }
});

Postagem.create({
    titulo: "Titulo dos dados",
    conteudo: "Dados inseridos"
});


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
         },

    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Usuario.create({
    nome: 'Victor',
    sobrenome: 'Oliveira',
    idade: 18,
    email: 'victoroliveira@node.com'
});



// (async () => {
//     try {
//       await Usuario.sync({ force: true });
//       console.log("Banco de dados criado com sucesso.");
//     } catch (err) {
//       console.err("Erro ao criar o banco de dados.", err);
//     }
//   })();