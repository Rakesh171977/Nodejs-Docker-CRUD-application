import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: "1234",
  port: 3306,
  database: "database_links"
});
