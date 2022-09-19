import { IMailProvider } from "../IMailProvider";
import SibApiV3Sdk from "sib-api-v3-sdk";
import mail from "@config/mail";
import MailManager from "@lib/MailManager";
import logger from "@lib/LogManager";

class MailProvider implements IMailProvider {
    async send({ type, destination, destinationName, params }):Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                logger.info(`[MailProvider] Send Mail to: ${destination}`)

                const defaultClient = SibApiV3Sdk.ApiClient.instance;
                let apiKey = defaultClient.authentications['api-key'];
                apiKey.apiKey = mail.apiKey;

                let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
                let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

                const { subject, htmlContent } = MailManager.getData(type, params)
                
                sendSmtpEmail.subject = subject
                sendSmtpEmail.htmlContent = htmlContent
                sendSmtpEmail.sender = { 
                    name: mail.sender_name,
                    email:mail.sender_email
                };
                sendSmtpEmail.to = [
                    {
                        email: destination,
                        name: destinationName
                    }
                ];
                
                apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
                    logger.info(`[MailProvider] Success: ${destination}`)
                    resolve(true)
                }, function(error) {
                    logger.error(`[MailProvider] Failed: ${destination} - ${error}`)
                    resolve(false)
                });
            } catch (error) {
                logger.error(`[MailProvider] Failed: ${destination} - ${error}`)
                reject(false);
            }
        })
    }
}

export { MailProvider };