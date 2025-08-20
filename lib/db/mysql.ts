// 这里是数据库连接，源于env环境变量
import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});