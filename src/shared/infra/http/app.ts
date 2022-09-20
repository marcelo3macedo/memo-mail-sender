
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import '@shared/container';
import { Queue } from './queue';

const app = express()

Queue.activate()

export { app };