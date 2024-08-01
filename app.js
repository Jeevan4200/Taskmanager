
const express =require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB =require('./db/connect')
const notFound = require('./middelwares/not-found')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())
const port =3000;
const start = async()=>{
    try{
await connectDB(process.env.MONGO_URI)
app.listen(port,console.log(`server is listening on ${3000}`))
    }
    catch(error){

    }
}
app.use(notFound)
app.use('/api/v1/tasks',tasks)
start()
