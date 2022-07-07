import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCommit1657197680979 implements MigrationInterface {
    name = 'initialCommit1657197680979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "value" integer NOT NULL, "description" character varying NOT NULL, "year" integer NOT NULL, "color" character varying NOT NULL, "plate" character varying NOT NULL, "price" integer NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_51922d0c6647cb10de3f76ba4e3" UNIQUE ("plate"), CONSTRAINT "PK_7abeefd7e08ff3587b4b7ca0f19" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
