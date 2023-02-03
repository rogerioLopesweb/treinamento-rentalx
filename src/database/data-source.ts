import 'dotenv/config'
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
});

export function createConnection(
    host = process.env.NODE_ENV === "test" ? "localhost" : "database"
  ): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize()
  }