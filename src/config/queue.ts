import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    url: process.env.RABBITMQ_ENDPOINT,
    mailValidation: process.env.RABBITMQ_QUEUE
};
