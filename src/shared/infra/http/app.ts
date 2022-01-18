
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express'
import { Cron } from './cron'

import '@shared/infra/typeorm';
import '@shared/container';

const app = express()

Cron.scheduler()

export { app };