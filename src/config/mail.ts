import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    apiKey: process.env.MAIL_APIKEY,
    sender_name: process.env.MAIL_SENDERNAME,
    sender_email: process.env.MAIL_SENDERMAIL,
    activationSubject: process.env.MAIL_ACTIVATIONSUBJECT,
    appLogo: process.env.MAIL_APPLOGO
}