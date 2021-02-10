const express = require("express")
const body = require("body-parser")
const mysql = require("mysql")

const app = express()

app.use(body.urlencoded({extended: true}))

const PORT = process.env.PORT || 1200


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "vendedor"
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/venda", (req, res) => {
    res.sendFile(__dirname + "/vendedor.html")
})

app.get("/compra", (req, res) => {
    res.sendFile(__dirname + "/cliente.html")
})

app.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/view/cadastro.html")
})

app.post("/info", (req, res) => {
    connection.query(`INSERT INTO cadastros VALUES(null, "${req.body.nome}", "${req.body.email}", "${req.body.senha}");`, (err, result, fields) => {if(err) throw err})
})


app.listen(PORT, () => console.log("server rodando"))