import {MigrationInterface, QueryRunner} from "typeorm";

export class removeValue1657200400146 implements MigrationInterface {
    name = 'removeValue1657200400146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "value"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "value" integer NOT NULL`);
    }

}
