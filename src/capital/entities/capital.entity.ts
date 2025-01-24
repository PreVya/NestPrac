import { Common } from 'src/commons/entities/common.entity';
import { City } from 'src/cities/entities/city.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Capital extends Common {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: true })
  name: string;

  @OneToOne(() => City, (city) => city.capital, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  city: City;
}
