import MailScheduler from "../entities/MailScheduler";
import ICreateMailSchedulerDTO from "../dtos/ICreateMailSchedulerDTO";
import IRemoveMailSchedulerDTO from "../dtos/IRemoveMailSchedulerDTO";

export default interface IMailSchedulerRepository {
  list(): Promise<MailScheduler[]>;
  create(data: ICreateMailSchedulerDTO): Promise<MailScheduler>;
  remove(data: IRemoveMailSchedulerDTO): Promise<void>;
}