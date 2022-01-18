const Resource = require('config')

export default {
    feedDecks: getProperty('cron.tasks', null)
};

function getProperty (name='', fallback = null) {
    return Resource.has(name) ? Resource.get(name) : fallback
}