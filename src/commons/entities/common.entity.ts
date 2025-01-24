import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Common {
  @Column('timestamp', { default: new Date() })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
