## Comandos

* yarn init -y
* yarn add express
* yarn add @types/typescript -D
* yarn add typescript -D
* yarn tsc --init
* yarn add ts-node-dev --dev
* yarn add eslint@^7.21.0 -D
* yarn lint
* yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
* yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
* yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
* yarn add uuid
* yarn add @types/uuid -D
* yarn add multer 
* yarn add @types/multer -D
* yarn add csv-parse
* yarn add swagger-ui-express
* yarn add @types/swagger-ui-express -D
* yarn add typeorm reflect-metadata
* yarn add pg
* yarn add tsyringe
* yarn add bcryptjs
* yarn add @types/bcryptjs -D
* yarn add jsonwebtoken
* yarn add @types/jsonwebtoken
* yarn add express-async-errors
* yarn add jest @types/jest -D
* yarn jest --init
* yarn add  ts-jest -D

## Instalar VS Code ESLint extension
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Docker Usando Dockerfile


* Comando que cria a imagem com base no arquivo dockerfile docker build -t  rentalx .
* Mapeia a porta e gera o Container  e executa docker run  -p 3333:3333 rentalx
* docker ps (lista todos container ativos)
* docker ps -a (lista todos container lidados e desligados)
* docker rm ID_or_NAME_Container (remove o container apartir do ID/name do container)
* docker stop ID_or_NAME_Container (Desativa o container apartir do ID/Name)
* docker start ID_or_NAME_Container (Ativa o container apartir do ID/Name)



## Docker-Composer - Comandos

* docker-compose up (Cria e inicializa o container)

* docker-compose up -d (Cria e inicializa o container em background)

## TypeORM 

* yarn typeorm migration:create ./src/shared/infra/typeorm/migrations/CreateSpecification Comando gera uma migração vazia passando a pasta e depos que gerar é preciso definia estrutura da tabela nome e campos.
* yarn migration:run para executar a migração criada, observação no script em packge.json tem quete esta configuração "migration:run": "ts-node-dev ./node_modules/typeorm/cli.js migration:run -d src/shared/infra/typeorm/data-source.ts"

<br /><br /><br />

# Cadastro de carro

**RF** => Requisitos funcionais<br />

    * Deve ser possível cadastrar um novo carro.
    

**RNF** => Requisitos não funcionais<br />

   * Nada definido

**RN** => Regra de negócio<br />

    * Não deve ser possível cadastrar um carro com uma placa já existente.
    * Não deve ser possível alterar a placa de um carro já cadastrado.
    * carro deve ser castrado com disponibilidade por padrão.
    * O usuário responsável pelo cadastro deve ser  um usuários administrador.

# Listagem de carros

**RF** => Requisitos funcionais<br />

    * Deve ser possível listar todos os carros disponíveis
    * Deve ser possível listar todos os carros disponíveis pelo nome da categoria
    * Deve ser possível listar todos os carros disponíveis pelo nome da marcar
    * Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RNF** => Requisitos não funcionais<br />

   * Nada definido

**RN** => Regra de negócio<br />

 * O usuãrio não precisa estar logado no sistema

# Cadastro de Especificação no carro

**RF** => Requisitos funcionais<br />

    * Deve ser possível cadastrar uma especificação para um carro
    * Deve ser possível listar todas as especificações
    * Deve ser possível listar todos os carros

**RNF** => Requisitos não funcionais<br />

   * Nada definido

**RN** => Regra de negócio<br />

  * Não deve ser possível cadastrar sem um carro cadastrado.
  * Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
  * O usuário responsável pelo cadastro deve ser  um usuários administrador.

# Cadastro de imagens

**RF** => Requisitos funcionais<br />

    * Deve ser possível cadastrar a imagem doc Carro
    * Deve ser possível listar todos os carros

**RNF** => Requisitos não funcionais<br />

   * Utilizar o multer para upload dos arquivos

**RN** => Regra de negócio<br />

    * O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
    * O usuário responsável pelo cadastro deve ser  um usuários administrador.

# Aluguel de carro

**RF** => Requisitos funcionais<br />

* Deve ser possível cadastrar um aluguel 

**RNF** => Requisitos não funcionais<br />
   * Nada definido

**RN** => Regra de negócio<br />

  * O aluguel deve ter duração mínima de 24 horas. 
  * Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
  