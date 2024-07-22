const express = require('express');

const app = express();

app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
	console.log("Servidor escutando na porta: ", PORT);
});

app.get("/", (req, res) => {

	const status = {
		"Status": "Rodando - IFSP"
	};

	res.send(status);
});

app.get("/produtos", (req, res) => {

	const produtos = [
		{
		  "id": 1,
		  "nome": "Camiseta",
		  "descricao": "Camiseta de algodão preta",
		  "preco": 29.99,
		  "estoque": 100
		},
		{
		  "id": 2,
		  "nome": "Celular",
		  "descricao": "Smartphone Android",
		  "preco": 799.90,
		  "estoque": 50
		},
		{
		  "id": 3,
		  "nome": "Livro",
		  "descricao": "Aventuras de Sherlock Holmes",
		  "preco": 15.50,
		  "estoque": 75
		}
	  ]

	res.send(JSON.stringify(produtos));
});

app.get("/clientes", (req, res) => {

	const dados = [{
		id:777,
		nome: "Fabiana Souza",
		endereco: "Rua sem nome",
		cpf: "555777888666"
	},
	{
		id:888,
		nome: "Jorge Aragao",
		endereco: "Rua dos trapalhoes",
		cpf: "55544477766"
	},
	{
		id:999,
		nome: "Claudemir Camargo",
		endereco: "Rua 7",
		cpf: "12345678910"
	}]
	
	res.send(JSON.stringify(dados));
});

app.get("/funcionarios", (req, res) => {

	const funcionarios = [
		{
		  "id": 1,
		  "nome": "João Silva",
		  "cargo": "Analista de Marketing",
		  "salario": 5000.00,
		  "departamento": "Marketing"
		},
		{
		  "id": 2,
		  "nome": "Maria Santos",
		  "cargo": "Desenvolvedor Web",
		  "salario": 6000.00,
		  "departamento": "Tecnologia da Informação"
		},
		{
		  "id": 3,
		  "nome": "Carlos Oliveira",
		  "cargo": "Gerente de Vendas",
		  "salario": 8000.00,
		  "departamento": "Vendas"
		}
	]

	res.send(JSON.stringify(funcionarios));
});

app.get("/departamentos", (req, res) => {

	const departamentos = [
		{
			"id": 1,
			"nome": "Marketing",
			"responsavel": "Ana Oliveira",
			"numero_funcionarios": 15,
			"localizacao": "São Paulo"
		  },
		  {
			"id": 2,
			"nome": "Tecnologia da Informação",
			"responsavel": "José Silva",
			"numero_funcionarios": 25,
			"localizacao": "Rio de Janeiro"
		  },
		  {
			"id": 3,
			"nome": "Vendas",
			"responsavel": "Marta Costa",
			"numero_funcionarios": 20,
			"localizacao": "Belo Horizonte"
		  }
	]

	res.send(JSON.stringify(departamentos));
});

app.get("/vendas", (req, res) => {

	const vendas = [
		{
		  "id": 1,
		  "produto": "Notebook",
		  "quantidade": 10,
		  "preco_unitario": 2500.00,
		  "data_venda": "2024-06-15"
		},
		{
		  "id": 2,
		  "produto": "Smartphone",
		  "quantidade": 20,
		  "preco_unitario": 1200.00,
		  "data_venda": "2024-06-20"
		},
		{
		  "id": 3,
		  "produto": "Televisor",
		  "quantidade": 5,
		  "preco_unitario": 3500.00,
		  "data_venda": "2024-06-25"
		}
	  ]

	res.send(JSON.stringify(vendas));
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (login(username, password)) {
        res.status(200).json({ message: "Login bem-sucedido" });
    } else {
        res.status(401).json({ message: "Credenciais inválidas" });
    }
});

function login(user, pwd) {
    const users = [
        { username: "usuario", password: "password" }
    ];
    const foundUser = users.find(u => u.username === user && u.password === pwd);
    return !!foundUser;
}