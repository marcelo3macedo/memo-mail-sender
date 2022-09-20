import { container } from 'tsyringe';
import { SendValidationUseCase } from '@modules/validation/useCases/sendValidation/SendValidationUseCase';
import ISendMailDTO from '@modules/validation/dtos/ISendMailDTO';
import logger from '@lib/LogManager';

class MailValidation {
    static async handle({ content }) {
        try {
            const sendValidationUseCase = container.resolve(SendValidationUseCase);
            const mailScheduler:ISendMailDTO = JSON.parse(content);
            
            await sendValidationUseCase.execute(mailScheduler);
        } catch (error) {
            logger.error("Failed to send mail", error)
        }
    }
}

export { MailValidation };