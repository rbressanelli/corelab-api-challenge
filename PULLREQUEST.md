**API**

<pre>
Primeiramente gostaria de informar que utilizei Express com TypeORM e tive que
excluir todo o código original.

Conforme sugerido nas instruções fiz um CRUD dos veículos.

O código foi desenvolvido com Typescript, Eslint, Prettier, yup para validação
das requisições e utilizei um arquivo para as variáveis de ambiente.
O banco de dados utilizado foi o PostgreSQL.

Utilizei do modelo baseado no MVC para construção do código, com entidades, 
controllers, middlewares e rotas.

Procurei componentizar ao máximo tentando deixar o código mais assertivo, limpo
e de certa maneira simplificado.

Usei a abordagem por repositório e construí as funções de acesso ao banco de dados
no arquivo constante em sua pasta.

A entidade veículo foi constituida considerando as informações sugeridas
nas ilustrações do figma.

Deixei o arquivo de configuração de conexão com o banco de dados dentro do src.

Os endpoints criados são os seguintes:

POST - /api/vehicles -> criação dos veículos
GET  - /api/vehicles -> listagem dos veículos criados
PATCH - /api/vehicles/:uuid -> update das informações do veículo
DELETE - /api/vehicles/:uuid -> deleção do veículo
PUT - /api/vehicles/:uuid -> favoritas/desfavoritar veículo

1 - Criação

Exemplo de corpo de requisição:
{
    "name": "Volks",
    "description": "4 portas bancos de couro",
    "plate": "VH45K66",
    "year": 1999,
    "color": "azul",
    "price": 25000
}

Exemplo do retorno esperado:
{
    "name": "Volks",
    "description": "4 portas bancos de couro",
    "plate": "VH45K66",
    "year": 1999,
    "color": "azul",
    "price": 25000,
    "uuid": "42a2f98e-17b7-4d9b-84a6-73cbe6a16873",
    "isFavorite": false,
    "createdOn": "2022-07-11T16:58:02.658Z",
    "updatedOn": "2022-07-11T16:58:02.658Z"
}


2 - Listagem

Sem corpo de requisição

Resposta esperada:
[
    {
        "uuid": "618b994a-a960-461f-a015-3f34b2efc7ed",
        "name": "Corola",
        "description": "4 portas bancos de couro",
        "year": 2020,
        "color": "cinza metálico",
        "plate": "VH45K85",
        "price": 185000,
        "isFavorite": false,
        "createdOn": "2022-07-11T14:13:10.113Z",
        "updatedOn": "2022-07-11T16:58:43.874Z"
    },
    {...
]


3 - Update

Informar uuid do objeto como parâmetro na url
Exemplo de corpo de requisição:
{
    "name": "novo nome",
    "description": "nova descrição",
    "plate": "nova placa",
    "year": novo ano,
    "color": "nova cor",
    "price": novo valor
}

OBS: Podem ser atualizadas qualquer informação individualmente se necessário.

Sem crpo de resposta.


4 - Deleção

Sem corpo de requisição
Informar uuid do objeto como parâmetro na url

Sem corpo de resposta


5 - Favoritas/Desfavoritar

Sem corpo de requisição
Informar uuid do objeto como parâmetro na url

Sem corpo de resposta.

OBS: Caso seja informado um uuid inexistente é retornado um erro
404-Not Found.

</pre>