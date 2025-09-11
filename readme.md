# Podcast Manager

## Descrição

O Podcast Manager é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria. Este projeto visa facilitar o acesso e a organização de episódios de podcasts em formato de vídeo, proporcionando uma experiência de navegação intuitiva e agradável para os usuários. Foi criado a partir de um projeto original do bootcamp MeuTudo Mobile Developer da DIO, e o projeto original pode ser cechado [aqui](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager).

## Funcionalidades

- **Listar os episódios de podcasts em sessões de categorias:** Os episódios são organizados em categorias como esporte, música, cultura e humor, permitindo aos usuários explorar facilmente os conteúdos disponíveis.
- **Filtrar episódios por nome de podcast:** Os usuários podem realizar buscas específicas por nome de podcast, facilitando o acesso aos episódios desejados.

### Funcionalidades adicionadas por mim
- **Filtrar episódios por nome dos mesmos:** Os usuários podem realizar buscas por uma palavra ou uma frase que seja o nome do episódio cadastrado, facilitando encontrar um episódio específico.

## Implementação

### Listar os episódios de podcasts em sessões de categorias

- **Endpoint:** `GET /list`
- **Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.
- **Exemplo de resposta:**

```json
[
       {
            "podcastName": "Ambiente de Música",
            "episodeNumber": "1",
            "episode": "Metal",
            "videoId": "bTdBPHObC4o",
            "cover": "https://i.ytimg.com/vi/bTdBPHObC4o/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gOig0MA8=&rs=AOn4CLBbS7zzq_xIjdTeUFN8wz5CCzKfag",
            "link": "https://www.youtube.com/watch?v=bTdBPHObC4o",
            "categories": ["música", "cultura", "transporte alternativo"]    
        },
        {
            "podcastName": "Falha de Cobertura",
            "episodeNumber": "252",
            "episode": "Neymar condenado a jogar",
            "videoId": "ckCjUS1j0io",
            "cover": "https://i.ytimg.com/vi/ckCjUS1j0io/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBHBPbIsdGgJzz8tm0qXzKMRa51KA",
            "link": "https://www.youtube.com/watch?v=ckCjUS1j0io",
            "categories": ["música", "cultura", "transporte alternativo"]    
        }
]
```

### Filtrar episódios por nome de podcast

- **Endpoint:** `GET /podcasts?podcastName={nome}`
- **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido. Não é case sensitive,mas leva em conta espaços.
- **Exemplo de requisição:** `GET /podcasts?podcastName=Falha%20de%20Cobertura`


### Filtrar episódios por nome de episódio

- **Endpoint:** `GET /episodes?episode={nome}`
- **Descrição:** Retorna uma lista de episódios de todos os podcasts com base no nome de episódio fornecido. Não é case sensitive,mas leva em conta espaços.
- **Exemplo de requisição:** `GET /episodes?podcastName=naCional`


## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

### Observações

Para fazer buscas usando URL utilizar as seguintes expressões, devido a presença de espaços e caracteres com acento:
- Ambiente%20de%20M%C3%BAsica
- Falha%20de%20Cobertura
Um frontend terá que fazer o URI encode para poder enviar os parâmetros corretamente através das URLs da API.

Foram realizadas algumas mudanças nas regras de negócio para garantir as respostas sem erros do servidor à busca por episódio e por nome. Recomendo comparação com o código original.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


