const Resource = require('config')

export default {
    apiKey: getProperty('mail.apiKey', null),
    sender_name: getProperty('mail.senderName', null),
    sender_email: getProperty('mail.senderEmail', null),
    activationSubject: getProperty('mail.activationSubject', null),
    appLogo: getProperty('mail.appLogo', null)
};

function getProperty (name='', fallback = null) {
    return Resource.has(name) ? Resource.get(name) : fallback
}