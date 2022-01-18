import { Column, CreateDateColumn, Entity, PrimaryColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('mail_scheduler')
export default class MailScheduler {
  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  destination: string;

  @Column()
  destinationName: string;

  @Column()
  params: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    this.id = uuid();
  }
}