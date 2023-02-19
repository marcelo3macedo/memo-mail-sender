import "@lib/VariableManager";

export default {
    apiKey: process.env.MAIL_APIKEY,
    sender_name: process.env.MAIL_SENDERNAME,
    sender_email: process.env.MAIL_SENDERMAIL,
    activationSubject: process.env.MAIL_ACTIVATIONSUBJECT,
    recoverSubject: process.env.MAIL_RECOVERSUBJECT,
    appLogo: process.env.MAIL_APPLOGO
}