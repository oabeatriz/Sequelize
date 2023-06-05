const { Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "manipulacao.sqlite"

});

//   ctrl k c

class Setor extends Model {
  static init(sequelize){
      super.init({
          idsetor:{
              type: DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true

          },

          nome:{
              type: DataTypes.STRING(60),
              allowNull: false

          },

          ramal:{
              type: DataTypes.STRING(10),
              allowNull: false,
          },

          email:{
            type: DataTypes.STRING(30),
            allowNull: true
          }

         }, {sequelize, modelName: 'setor', tableName: 'setores'})
     }
 }

//inicialização do modelo create table setor
Setor.init(sequelize);



class Dados extends Model {
  static init(sequelize){
    super.init({
      matricula:{
        type: DataTypes.INTEGER, //inteiro
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      idsetor:{
        type: DataTypes.INTEGER,
        references:{
          model: Setor,
          key: 'idsetor'}

      },

      nome:{
        type: DataTypes.STRING(60),
        allowNull: false

      },

      datanascimento:{
        type: DataTypes.DATE
        
      },
      
      telefone:{
        type: DataTypes.STRING(15),
        
      }

    }, {sequelize, modelName: 'funcionarios', tableName: 'dados'});
  }
}
//inicialização da classe

Dados.init(sequelize);



//sincronismo
(async () => {
    try {
      await sequelize.sync({ force: true });
      console.log("Banco de dados criado com sucesso.");
    } catch (err) {
      console.err("Erro ao criar o banco de dados.", err);
    }

    // INSERT INTO TABLE 
     const setor_create_f = await Setor.create({nome: "Financeiro-------", ramal: "2134-------", email: "financeiro.ifes@node.com------", idsetor: 1});
     const setor_create_s = await Setor.create({nome: "Secretaria-------", ramal: "2135--------", email: "secretaria.ifes@node.com---------", idsetor: 2});
     const setor_create_p = await Setor.create({nome: "Portaria----------", ramal: "2136------", email: "portaria.ifes@node.com---------", idsetor: 3});
     
    


     // READ - listando objetos setor
     const listagem_setores = await Setor.findAll();
     console.log("Lista de setores: \n", JSON.stringify(listagem_setores, null, 2), "\n \n");
    //se eu substituir o "null" por ['idsetor'] ele mostra no console apenas os dados referentes
   // ao id setor 

  
   

    // UPDATE - atualizar objetos
    const atualizar_portaria = await Setor.findByPk(3); //busca os dados apenas do const 3 (portaria) para atualizar;
    atualizar_portaria.nome = "Estoque";
    atualizar_portaria.email = "estoque.ifes@node.com";
    const resultado = await atualizar_portaria.save();
    console.log(resultado);

     const setores_update = await Setor.findAll();
     console.log("Setores atualizados: \n", JSON.stringify(setores_update, null, 2), "\n \n");

    // DELETE - deletar objetos
    
   //const delete_setor_f = await Setor.findByPk(1);
  // delete_setor_f.destroy();
   //const setores_excluidos = await Setor.findAll();
   //console.log("Setores após exclusão: \n", JSON.stringify(setores_excluidos, null, 2), "\n \n");


// INSERT INTO TABLE

try {
  await Dados.bulkCreate([
    { nome: "Mariah", matricula: "1028", datanascimento: "1998-01-14", idsetor: 1, telefone: "995247" },
    { nome: "João", matricula: "1029", datanascimento: "1994-04-02", idsetor: 2, telefone: "994791" },
    { nome: "Mario", matricula: "1030", datanascimento: "1997-07-10", idsetor: 3, telefone: "999875" }
  ]);

  const list_funcionarios = await Dados.findAll();
  console.log("Lista de funcionários: \n", JSON.stringify(list_funcionarios, null, 2), "\n \n");


} catch (err) {
  console.error("Erro ao listar funcionários.", err);
}
  })();

 

  