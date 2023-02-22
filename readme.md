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

* yarn typeorm migration:create ./src/database/migrations/CreateSpecification Comando gera uma migração vazia passando a pasta e depos que gerar é preciso definia estrutura da tabela nome e campos.
* yarn migration:run para executar a migração criada, observação no script em packge.json tem quete esta configuração "migration:run": "ts-node-dev ./node_modules/typeorm/cli.js migration:run -d src/database/data-source.ts"