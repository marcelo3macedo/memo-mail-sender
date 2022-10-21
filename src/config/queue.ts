import "@lib/VariableManager";

export default {
    url: process.env.RABBITMQ_ENDPOINT,
    mailValidation: process.env.RABBITMQ_QUEUE
};
