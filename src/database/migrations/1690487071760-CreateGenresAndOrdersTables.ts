import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGenresAndOrdersTables1690485944171 implements MigrationInterface {
    name = 'CreateGenresAndOrdersTables1690485944171'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE genres (
          id uuid PRIMARY KEY,
          name varchar(255) NOT NULL,

          created_at timestamp NOT NULL DEFAULT now(),
          updated_at timestamp NOT NULL DEFAULT now(),
        );

        CREATE TABLE orders (
          id uuid PRIMARY KEY,
          user_id uuid NOT NULL,
          game_id uuid NOT NULL,

          created_at timestamp NOT NULL DEFAULT now(),
          updated_at timestamp NOT NULL DEFAULT now(),

          FOREIGN KEY (user_id) REFERENCES users(id),
          FOREIGN KEY (game_id) REFERENCES games(id)
        );
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        DROP TABLE genres;
        DROP TABLE orders;
      `);
    }

}
