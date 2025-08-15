import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    firstName: String;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    lastName: String;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 10
    })
    gender: String;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique: true
    })
    email: String;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: String;
}