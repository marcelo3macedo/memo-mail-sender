import { getRepository, Repository } from 'typeorm';

import MailScheduler from '@modules/validation/entities/MailScheduler';
import IMailSchedulerRepository from '../IMailSchedulerRepository';

export class MailSchedulerRepository implements IMailSchedulerRepository {
  private repository: Repository<MailScheduler>;

  constructor() {
    this.repository = getRepository(MailScheduler);
  }

  async list(): Promise<MailScheduler[]> {  
    return await this.repository.find();
  }

  async create({ type, destination }): Promise<MailScheduler> {  
    const mailScheduler = this.repository.create({
      type,
      destination
    });

    return await this.repository.save(mailScheduler);
  }

  async remove({ id }): Promise<void> {
    this.repository.softDelete(id);
  }
}