import express from 'express'
import dotenv from 'dotenv'
import { appRouter } from './routes/contactsRoutes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 8000
app.use(express.json())

app.use('/api/contacts', appRouter)
app.get('/', (req, res) => {
    res.send("Hello this is search Engine")
})
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})