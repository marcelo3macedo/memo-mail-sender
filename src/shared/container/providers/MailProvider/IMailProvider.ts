import ISendMailDTO from "@modules/validation/dtos/ISendMailDTO";

interface IMailProvider {
    send(data: ISendMailDTO):Promise<boolean>;
}

export { IMailProvider };