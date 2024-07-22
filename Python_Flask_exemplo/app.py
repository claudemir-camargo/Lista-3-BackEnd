from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def status():
    return jsonify({"Status": "Rodando - IFSP Python"})

@app.route("/produtos", methods=['GET'])
def listar_produtos():
    produtos = [
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
    return jsonify(produtos)

@app.route("/clientes", methods=['GET'])
def listar_clientes():
    clientes = [
        {
            "id": 777,
            "nome": "Fabiana Souza",
            "endereco": "Rua sem nome",
            "cpf": "555777888666"
        },
        {
            "id": 888,
            "nome": "Jorge Aragao",
            "endereco": "Rua dos trapalhoes",
            "cpf": "55544477766"
        },
        {
            "id": 999,
            "nome": "Claudemir Camargo",
            "endereco": "Rua 7",
            "cpf": "12345678910"
        }
    ]
    return jsonify(clientes)

@app.route("/funcionarios", methods=['GET'])
def listar_funcionarios():
    funcionarios = [
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
    return jsonify(funcionarios)

@app.route("/departamentos", methods=['GET'])
def listar_departamentos():
    departamentos = [
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
    return jsonify(departamentos)

@app.route("/vendas", methods=['GET'])
def listar_vendas():
    vendas = [
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
    return jsonify(vendas)

@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if authenticate(username, password):
        return jsonify({"message": "Login bem-sucedido Python"}), 200
    else:
        return jsonify({"message": "Credenciais inválidas"}), 401

def authenticate(user, pwd):
    users = [
        {"username": "usuario", "password": "password"}
    ]
    found_user = next((u for u in users if u["username"] == user and u["password"] == pwd), None)
    return found_user is not None

if __name__ == "__main__":
    app.run(port=8080, debug=True)