import dotenv from 'dotenv'
import path from 'path'
import { ENVIROMENT_DEV } from '@constants/enviroments'

const enviroment = process.env.npm_lifecycle_event === ENVIROMENT_DEV ? 
    '' : 'production'

dotenv.config({
    path: path.resolve(__dirname, "../../", `${enviroment}.env`),
    encoding: 'utf-8'
})