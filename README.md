# Recipe Catalog

O objetivo desse projeto é um teste para a vaga back-end da empresa Biox, o projeto consiste em uma API feita em Nest, que permite criar uma nova receita, listar todas as receitas e listar uma receita por ID.


### Recipes route

#### post method

```http
  POST /localhost:3000/recipes

 {
	"title": "Título da receita",
	"description": "Descrição da receita",
	"ingredients": ["Ingrediente1", "Ingrediente2"] 
  }
```

#### get index method

```http
  GET /localhost:3000/recipes
```

#### get show method

```http
  GET /localhost:3000/recipes/:id
```

## 🔗 Contact
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-carvalho-f%C3%BCllenbach-9b25a6148/)


## 🛠 Skills
NestJs, Typescript, Jest.