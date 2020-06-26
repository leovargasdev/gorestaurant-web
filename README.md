<h1 align="center">
  <img alt="GoRestaurant" title="GoRestaurant" src=".github/logo.svg" width="300px" />
</h1>

<h4 align = "center">
  Serviço para listagem de pratos de comidas
</h4>


## :rocket: Tecnologias

-  [React.js](https://pt-br.reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [JEST](https://jestjs.io/)
-  [JSON Server](https://github.com/typicode/json-server)

## 💻 Sobre o desafio

Criar uma nova aplicação para treinar os conhecimentos com React.js e TypeScript, praticando o conceito de CRUD (Create, Read, Update, Delete).

Essa será uma aplicação que irá se conectar a uma fake API usando o *json-server*, nela será possível criar, editar, listar e deletar pratos de comida de um restaurante fictício. Para execução do desafio foi proposto o seguinte [layout](https://www.figma.com/file/1lK6AVCPybtWeBLCH8B08N/GoRestaurant?node-id=0%3A1)


## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório

```bash
$ git clone https://github.com/LeeonardoVargas/gorestaurant-web.git && cd gorestaurant-web
# Instalando as depedências
$ yarn install
# Executanto aplicação
$ yarn start
```

Abra outra janela/aba do terminal e execute o seguinte comando para rodar a API Fake.

```bash
$ yarn json-server server.json -p 3333
```

## 📝 Específicação dos testes

- [x] **should be able to list all the food plates from your api**: Para que esse teste passe, sua aplicação deve permitir que sejam listados, toda os pratos de comidas que são retornadas da sua fake API.

- [x] **should be able to add a new food plate**: Para que esse teste passe, você deve permitir que um prato de comida seja adicionado a sua api, adicionando-o também à listagem.

- [x] **should be able to edit a food plate**: Para que esse teste passe, você deve permitir que um prato de comida seja editado na sua api, editando-o também na listagem.

- [x] **should be able to remove a food plate**: Para que esse teste passe, você deve permitir que um prato de comida seja removido da sua api, removendo-o também da listagem.

- [x] **should be able to update the availibility of a food plate**: Para que esse teste passe, em sua dashboard você deve permitir que o status do prato de comida seja alterado entre Disponível e Indisponível;
