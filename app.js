
const express = require('express'); // Atribuir o modulo express 
const app = express(); // Rodar a função express


let usuarios =["Andre","Marinho","Tadeu"]
    
// Exercicio 1

app.get('/usuario',(req,res)=>{  // metodo get
    res.send(usuarios)
})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})


// Exercicio 2
let novaLista = usuarios.push("Novousuario")
app.post('/usuario',(req,res)=>{  // metodo post
    res.send(novaLista)
})


//Exercicio 3

app.get('/usuario/:id',(req,res)=>{  // metodo get
    res.send(usuarios)
})

usuarios[1]="Usuario Editado"
app.put('/usuario/:id',(req,res)=>{
    res.send(usuarios)
})

//Exercicio 4
novaLista2 = usuarios.pop()
app.delete('/usuario/:id',(req,res)=>{
    res.send(novalista2)
})


/// Aula 03/05/2022

// Começar com  $ npm init[terminal]
// Cria o package.json
// Instalar os pacotes
    // $ npm install express   - Express serve para criação de servidores
    // $ nom install -D nodemon - 
    // Se precisar de desinstalar pacotes $npm remove NOME_DA_DEPENDENCIA
    // Depois apagar o package-lock.json
    // Depois instalar npm todos os pacotes que estão nas dependencias do package.json
    // $ npm install  - Irá instalar todas as dependencias
    