const Resource = require('config')

export default {
    tasks: getProperty('cron.tasks', null)
};

function getProperty (name='', fallback = null) {
    return Resource.has(name) ? Resource.get(name) : fallback
}