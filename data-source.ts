import { DataSource } from 'typeorm';
import path, { join } from 'path';
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
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [City, Capital],
  // migrations: {
  //   path: './migrations',
  //   glob: '!(*.d).{js,ts}',
  // },
  //migrations: [join(__dirname, './migrations', '*.{ts,js}')],
  migrations: ['migrations/*.ts'],
  synchronize: false,
  migrationsRun: true,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
console.log(process.env.DB_HOST);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
