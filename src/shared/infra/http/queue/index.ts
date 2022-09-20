import queue from "@config/queue";
import QueueManager from "@lib/QueueManager";
import { MailValidation } from "@modules/validation/useCases/mailValidation/MailValidation";

class Queue {
    static async activate() {
        const queueManager = new QueueManager()
        await queueManager.start()
        
        queueManager.consume(queue.mailValidation, MailValidation.handle);
    }
}

export { Queue };