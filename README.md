# Blog com Astro e Bun

Este é um projeto de blog construído com [Astro](https://astro.build/) e [Bun](https://bun.sh/), onde as entradas do blog são escritas em arquivos Markdown Extended (.mdx). A plataforma permite fácil adição e gerenciamento de postagens, além de oferecer uma estrutura leve e rápida para blogagem.

![Preview do Projeto](./preview.png)

## Estrutura do Projeto

- **Astro**: Framework usado para construir o site estático.
- **Bun**: Gerenciador de pacotes e runtime JavaScript para um ambiente mais rápido e eficiente.
- **Markdown (.mdx)**: Todas as entradas de blog são feitas em arquivos Markdown Extended (.mdx), facilitando a formatação e organização.

## Como Adicionar Novas Entradas

Para criar uma nova entrada no blog, basta adicionar um novo arquivo .mdx na pasta `src/content/blog`. Certifique-se de seguir o formato frontmatter, como no exemplo abaixo, para garantir que o conteúdo seja exibido corretamente.

### Exemplo de Postagem em Markdown (.mdx)

Salve o arquivo como `src/content/blog/nome-do-post.mdx` e use a estrutura abaixo:

````mdx
---
title: Explorando Funções do ES6
date: 2023-06-01
description: Explorando algumas das novas funcionalidades do ES6 em JavaScript.
author: Jane Doe
image: "images/post-01.png"
tags: [JavaScript, ES6, Programação]
---

# {frontmatter.title}

O JavaScript ES6 introduziu várias novas funcionalidades que tornaram a codificação em JavaScript mais eficiente e agradável. Vamos explorar algumas dessas funcionalidades.

## Funções de Flecha

As funções de flecha fornecem uma nova sintaxe para escrever expressões de função. São mais concisas e vinculam lexicamente o valor de `this`.

### Exemplo

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Saída: 5
```

## Template Literals

Os template literals permitem uma interpolação de strings mais fácil e strings de várias linhas. Eles utilizam acento grave da crase (\`) em vez de aspas simples ou duplas.

### Exemplo

```javascript
const name = "Jane";
console.log(`Olá, ${name}!`);
// Saída: Olá, Jane!
```

## Atribuição via desestruturação

A atribuição via desestruturação permite extrair valores de arrays ou objetos e atribuí-los a variáveis de uma maneira mais concisa.

### Exemplo

```javascript
const person = { name: "Jane", age: 30 };
const { name, age } = person;
console.log(name, age); // Saída: Jane 30
```
````

## Instalação e Uso

Para executar o projeto localmente, você precisará ter o [Bun](https://bun.sh/) instalado. Depois de clonar o repositório, siga estes passos:

1. Instale as dependências:

   ```bash
   bun install
   ```

2. Execute o projeto:

   ```bash
   bun run dev
   ```

3. Acesse o blog localmente em [http://localhost:3000](http://localhost:3000).
