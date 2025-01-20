import { MigrationInterface, QueryRunner } from "typeorm";

export class CityAndCapital1737203490979 implements MigrationInterface {
    name = 'CityAndCapital1737203490979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "capital" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_915c3a0418f4f1fe2eaad2856ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "description" character varying(200) NOT NULL, "capitalId" uuid, CONSTRAINT "REL_b9fb5ff4b622eec2b37d373c3f" UNIQUE ("capitalId"), CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "FK_b9fb5ff4b622eec2b37d373c3f5" FOREIGN KEY ("capitalId") REFERENCES "capital"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "FK_b9fb5ff4b622eec2b37d373c3f5"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "capital"`);
    }

}
