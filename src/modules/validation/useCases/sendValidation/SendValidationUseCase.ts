import logger from '@config/logger';
import IMailSchedulerRepository from '@modules/validation/repositories/IMailSchedulerRepository';
import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';
import CacheManager from 'lib/CacheManager';
import { inject, injectable } from 'tsyringe';

@injectable()
export class SendValidationUseCase {
  constructor(
    @inject('MailSchedulerRepository')
    private mailSchedulerRepository: IMailSchedulerRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute() {
    const scheduled = await CacheManager.check('scheduled')

    if (scheduled) {
      return
    }

    const mails = await this.mailSchedulerRepository.list()

    logger.info(`[SendValidationUseCase] Mails in Queue: ${mails.length}`)

    mails.map(async m => {
      const success = await this.mailProvider.send(m)

      if (success) {
        await this.mailSchedulerRepository.remove({ id: m.id })
      }
    })

    logger.info(`[SendValidationUseCase] Finished`)
  }
}