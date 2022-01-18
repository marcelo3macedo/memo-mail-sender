import mail from "@config/mail";
import * as fs from "fs";
import * as path from "path";

const globalParameters = [
    { key: "{{app_logo}}", value: mail.appLogo }
]

function getData(type, params) {
    const data = {
        subject: null,
        htmlContent: null
    }

    if (type === "new-user") {
        data.subject = mail.activationSubject            
        data.htmlContent = applyParams(fs.readFileSync(path.join(__dirname, '../templates/activation.html'), 'utf8'), params)
    }
    return data
}

function applyParams(data, params) {
    globalParameters.map(p => {
        let re = new RegExp(p.key, "g")
        data = data.replace(re, p.value)    
    })

    params = JSON.parse(params)
    params.map(p => {
        let re = new RegExp(p.key, "g")
        data = data.replace(re, p.value)    
    })

    return data
}
 
const MailManager = {
    getData
}

export default MailManager