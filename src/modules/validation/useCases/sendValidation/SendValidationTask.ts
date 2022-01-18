import { container } from 'tsyringe';
import { SendValidationUseCase } from './SendValidationUseCase';

export class SendValidationTask {
    async handle() {
        const sendValidationUseCase = container.resolve(SendValidationUseCase);
        await sendValidationUseCase.execute();
    }
}