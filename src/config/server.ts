import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    port: process.env.APP_PORT
}