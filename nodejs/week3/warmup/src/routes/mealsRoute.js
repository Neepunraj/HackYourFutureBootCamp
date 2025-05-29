import express from 'express'
import { getDoccumnetsbyID, getMealSearch, SeachPostMethod } from '../controllers/getMeals.js'

export const appRouter = express.Router()
appRouter.get('/search', getMealSearch)
appRouter.get('/doccuments/:id', getDoccumnetsbyID)
appRouter.post('/search', SeachPostMethod)
