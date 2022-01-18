
const cron = require("node-cron")
import cronConfig from "@config/cron"
import { Tasks } from "./tasks"

const tasks = new Tasks()

class Cron {
    static  scheduler() {
        cronConfig.feedDecks.map(c => {
            let task = tasks.get(c.name)

            if (!task) {
                return              
            }           

            cron.schedule(c.schedule, task.handle) 
        })       
    }
}

export { Cron };