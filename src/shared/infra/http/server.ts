require("dotenv").config()

import { app } from './app'
import logger from '@lib/LogManager'
import server from '@config/server'

const port = server.port

app.listen(port, () => logger.info(`Server running on port ${port}`))