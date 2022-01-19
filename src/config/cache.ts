const Resource = require('config')

export default {
    connectionString: getProperty('cache.connectionString', null),
    expireTimeInSeconds: getProperty('cache.expireTimeInSeconds', null),
    hashKey: getProperty('cache.hashKey', null),
    mailSender: getProperty('cache.key.mailSender', null)
};

function getProperty (name='', fallback = null) {
    return Resource.has(name) ? Resource.get(name) : fallback
}