import {Router} from "express"
import { addTask  , deleteTask , updateTask,fetchTask} from "../controller/task.controller.js"
const router = Router()
router.post('/createTask',addTask)
router.delete('/deleteTask/:id',deleteTask)
router.put("/update/:id", updateTask);
router.get('/fetchTask',fetchTask)
export default router