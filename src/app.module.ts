import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CitiesModule } from './cities/cities.module';
import { City } from './cities/entities/city.entity';
import { CapitalModule } from './capital/capital.module';
import { Capital } from './capital/entities/capital.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:process.env.DB_HOST,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
      synchronize: false,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
      entities: [City,Capital],
      migrations: [join(__dirname, 'migrations', '*.{ts,js}')], // Path to migrations
      logging: true, // Optional: Enable query logging
      // synchronize: true,
    }),
    CitiesModule,
    CapitalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
