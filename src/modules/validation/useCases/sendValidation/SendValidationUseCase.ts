import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';
import { inject, injectable } from 'tsyringe';
import ISendMailDTO from '@modules/validation/dtos/ISendMailDTO';

@injectable()
export class SendValidationUseCase {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ISendMailDTO) {
    const { type, name, email, params } = data || {};

    return this.mailProvider.send({ 
      type, name, email, params
    });
  }
}