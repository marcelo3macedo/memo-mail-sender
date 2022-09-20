require("dotenv").config()

import { app } from './app'
import logger from '@lib/LogManager'
import server from '@config/server'

app.listen(server.port, () => logger.info(`Server running on port ${server.port}`))