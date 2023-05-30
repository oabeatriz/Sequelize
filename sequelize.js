const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('escola.sqlite', (err) => {
    if(err) {
        console.error("Servidor de banco de dados não foi executado, repita o processo.")
    } else {
        console.log("Banco de dados criado com sucesso.")
    }
  //db.run("CREATE TABLE alunos(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
  //db.run("INSERT into alunos(matricula, nome, email, cidade) values (1, 'ANA--------', 'ANA@REPROGRAMESE.COM------', 'CARIACICA')");
  //db.run("INSERT into alunos(matricula, nome, email, cidade) values (2, 'JOAO--------', 'JOAO@REPROGRAMESE.COM------', 'VITORIA')");
  //db.run("INSERT into alunos(matricula, nome, email, cidade) values (3, 'MARIAH--------', 'MARIAH@REPROGRAMESE.COM------', 'SERRA')");
  

db.each("select matricula, nome from alunos", (err, row) => {
if (err) {
console.error(err.message);
}
console.log(row.matricula + "\t" + row.nome);
});
});