
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express'
import { Cron } from './cron'

import '@shared/infra/typeorm';
import '@shared/container';
import CacheManager from 'lib/CacheManager';

const app = express()

CacheManager.connect()

Cron.scheduler()


export { app };