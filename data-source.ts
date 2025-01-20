import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { City } from 'src/cities/entities/city.entity';
import { Capital } from 'src/capital/entities/capital.entity';

dotenv.config();
console.log(process.env.DB_HOST);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);

export const AppDataSource = new DataSource({
  type: 'postgres',
  //url: process.env.DB_CONNECTION,
  host:process.env.DB_HOST,
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  entities: [City,Capital],
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  synchronize: false,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,// Set to true in production for strict SSL
});
console.log(process.env.DB_HOST);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);

