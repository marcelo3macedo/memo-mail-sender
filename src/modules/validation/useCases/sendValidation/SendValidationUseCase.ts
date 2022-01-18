import IMailSchedulerRepository from '@modules/validation/repositories/IMailSchedulerRepository';
import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';
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
    const mails = await this.mailSchedulerRepository.list()

    mails.map(async m => {
      const success = await this.mailProvider.send(m)

      if (success) {
        await this.mailSchedulerRepository.remove({ id: m.id })
      }
    })
  }
}