import { app } from './app'
import logger from '@config/logger'

const port = 1313

app.listen(port, () => logger.info(`Server running on port ${port}`))