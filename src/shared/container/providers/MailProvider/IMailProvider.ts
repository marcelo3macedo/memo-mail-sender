import MailScheduler from "@modules/validation/entities/MailScheduler";

interface IMailProvider {
    send(data: MailScheduler):Promise<boolean>;
}

export { IMailProvider };