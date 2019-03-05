import path from 'path'
import express from 'express'

const app = express()
const ENV = process.env.NODE_ENV || 'development'
const envPath = path.join(__dirname, `./dist/configs/env/${ENV}`)

require(envPath)(app)

app.listen(app.get('port'), ()=> {
    console.log('Express has been started')
})