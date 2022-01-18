import { SendValidationTask } from "@modules/validation/useCases/sendValidation/SendValidationTask";

class Tasks {
    get(taskId) {
        switch (taskId) {
            case "send-validation":
                return new SendValidationTask();
            default:
                return
        }        
    }
}

export { Tasks };