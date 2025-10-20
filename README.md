# MICROSSERVIÇO DE veiculos

# Pré-requisitos
- versão do node 22
- executar o script sql -> desafio-info-sistemas\script.sql
- alterar o arquivo .env de acordo com as suas configurações do banco de dados

# Como executar o projeto
- npm install 
- npm run start

# Rotas mapedas para teste
GET localhost:3000/veiculos
GET localhost:3000/veiculos/{ID}
POST localhost:3000/veiculos
PUT localhost:3000/veiculos
DELETE localhost:3000/veiculos/{ID}

# Como executar os teste unitário
- npm test