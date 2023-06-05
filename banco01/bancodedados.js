const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('empresa.sqlite', (err) => {
    if(err) {
        console.error("Servidor de banco de dados não foi executado, repita o processo.")
    } else {
        console.log("Banco de dados criado com sucesso.")
    }
    //db.run("CREATE TABLE funcionario(matricula int primary key, id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15))");
    //db.run("CREATE TABLE setor(idsetor int, nome varchar(40), ramal varchar(4), e_mail varchar(30))");  

    //comentar o trecho do codigo apos a execução, se nao gera erro de sintaxe

   //db.run("INSERT into setor(idsetor, nome, ramal, e_mail) values (1, 'FINANCEIRO----', '4254', 'FINACEIRO@EMPRESA.COM')");
   //db.run("INSERT into setor(idsetor, nome, ramal, e_mail) values (2, 'PORTARIA----', '4253', 'PORTARIA@EMPRESA.COM')");
   //db.run("INSERT into setor(idsetor, nome, ramal, e_mail) values (3, 'SECRETARIA----', '4257', 'SECRETARIA@EMPRESA.COM')");

    // comentar apos a execução para não adicionar novamente no banco de dados

    //db.run("INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values (1234,1, 'ANA--', '12-04-97 ---', '07854')");
    //db.run("INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values (1235,2, 'JOAO--', '18-02-90 ---', '07948')");
   // db.run("INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values (1236,3, 'MARIA--', '30-04-99 ---', '07423')");

});


//• Int – utilizado para valores inteiros.
//• Varchar – utilizado para textos. Suporta até 255 caracteres.
//• Date – Tipos data.

