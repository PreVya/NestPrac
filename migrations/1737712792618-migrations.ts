import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1737712792618 implements MigrationInterface {
  name = 'Migrations1737712792618';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "capital" ADD "createdAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "capital" ADD "deletedAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "cities" ADD "createdAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "cities" ADD "deletedAt" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "capital" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "capital" DROP COLUMN "createdAt"`);
  }
}
