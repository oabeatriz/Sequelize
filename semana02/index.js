const { Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "pratica02.sqlite"

});


class Setores extends Model {
    static init(sequelize) {
        super.init({
           

           idsetor:{
            type: DataTypes.INTEGER
           },

           nome:{
            type: DataTypes.STRING(60),
            allowNull: false
           },

           ramal: {
            type: DataTypes.STRING(10),
            allowNull: false
           },
           
           email:{
            type: DataTypes.STRING(40),

           }


        }, {sequelize, modelName: 'Setores', tableName: 'dados'});
    }
}

Setores.init(sequelize);


(async () => {
    try {
        await sequelize.sync({force: true});
        console.log("Banco de dados criado com sucesso!");
    } catch (err) {
        console.err("Banco de dados não foi criado, tente novamente.", err);
    }




// inserindo os dados na tabela;

 const setores_c = await Setores.create({nome:"Contabilidade---", ramal: "1029---", email:"contabilidade@ifes.com----", idsetor: 1 });
 const setores_d = await Setores.create({nome:"Diretoria---", ramal:"1030---", email:"diretoria@ifes.com---", idsetor: 2});
 const setores_r = await Setores.create({nome:"Recursos humanos", ramal:"1031---", email:"recursoshumanos@ifes.com---", idsetor: 3 });


 //deletando o setor contabilidade
const delete_setor_c = await Setores.findByPk(1);
  delete_setor_c.destroy();

 const setores_excluidos = await Setores.findAll();
 console.log("Setores após exclusão:\n", JSON.stringify(setores_excluidos, null, 2), "\n \n");


 // atualizando o nome do setor

const departamento_pessoal = await Setores.findByPk(3);
departamento_pessoal.nome = "Departamento Pessoal";
departamento_pessoal.email = "departamentopessoal@ifes.com";
const resultado = await departamento_pessoal.save();
console.log(resultado);

//lista de setores atualizadas
const setores_update = await Setores.findAll();
     console.log("Setores atualizados: \n", JSON.stringify(setores_update, null, 2), "\n \n");


}) ();











