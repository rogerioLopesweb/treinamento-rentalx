import 'dotenv/config'
import "reflect-metadata";//TypeORM dependencia 
import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
});


appDataSource.initialize();

