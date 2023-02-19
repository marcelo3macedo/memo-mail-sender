import { IMailProvider } from "../IMailProvider";
import SibApiV3Sdk from "sib-api-v3-sdk";
import mail from "@config/mail";
import MailManager from "@lib/MailManager";

class SendInBlueProvider implements IMailProvider {
    async send({ type, email, name, params }):Promise<boolean> {
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
                email,
                name
            }
        ];

        return apiInstance.sendTransacEmail(sendSmtpEmail);
    }
}

export { SendInBlueProvider };