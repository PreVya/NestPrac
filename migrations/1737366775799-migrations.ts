import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1737366775799 implements MigrationInterface {
    name = 'Migrations1737366775799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" ALTER COLUMN "name" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" ALTER COLUMN "name" DROP NOT NULL`);
    }

}
