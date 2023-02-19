import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';
import { inject, injectable } from 'tsyringe';
import ISendMailDTO from '@modules/validation/dtos/ISendMailDTO';
import logger from '@lib/LogManager';

@injectable()
export class SendValidationUseCase {
  constructor(
    @inject('SendInBlueProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ISendMailDTO) {
    try {
      const { type, name, email, params } = data || {}

      const mail = await this.mailProvider.send({ 
        type, name, email, params
      })

      logger.info("SendValidationUseCase.execute: " + JSON.stringify(data) , data)

      return mail
    } catch (e) {
      logger.error("SendValidationUseCase.execute: " + JSON.stringify(data) + JSON.stringify(e))
    }
  }
}