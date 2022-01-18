import { container } from 'tsyringe';
import './providers';

import IMailSchedulerRepository from '@modules/validation/repositories/IMailSchedulerRepository';
import { MailSchedulerRepository } from '@modules/validation/repositories/implementations/MailSchedulerRepository';

container.registerSingleton<IMailSchedulerRepository>('MailSchedulerRepository', MailSchedulerRepository);
