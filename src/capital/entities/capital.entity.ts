import { City } from "src/cities/entities/city.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Capital {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @OneToOne(()=> City, city => city.capital,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    city:City;
}
