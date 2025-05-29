import express from 'express'
import { queryContacts } from '../controllers/getContacts.js'

export const appRouter = express.Router()
appRouter.get('/search', queryContacts)

