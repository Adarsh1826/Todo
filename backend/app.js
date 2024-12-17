import express from "express"
import { configDotenv } from "dotenv"
import { connectDB } from "./src/db/db.connection.js"
import TaskRoute from "./src/routes/task.route.js"
import cors from "cors"
const app = express()
configDotenv()
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
  }));
app.use(express.json());
connectDB()
app.use('/api/v1/task',TaskRoute)
app.listen(process.env.PORT || 4000,()=>{
    console.log(`Server is working http://localhost:${process.env.PORT}`);
})
export default app