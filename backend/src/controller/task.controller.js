import mongoose from "mongoose";
import { Task } from "../models/task.model.js";
const addTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await Task.create({
      title,
    });
    console.log("Task added Successfully");
    return res.status(200).json({
      message: "Task created Successfully",
      success: true,
      newTask,
    });
  } catch (error) {
    console.log("Error in task addition", error);
    return res.status(500).json({
      message: "Failed in task addition",
      success: false,
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; 

    const findTask = await Task.findById(id); 
    if (!findTask) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
      });
    }
    await Task.findByIdAndDelete(id);
    console.log("Task deleted successfully");
    return res.status(200).json({
      message: "Task deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error deleting task", error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

const updateTask = async (req,res)=>{
try {
    const {id} = req.params
    const {title,completed} = req.body
    const update = await Task.findByIdAndUpdate(
      id,
      {title,completed},
      {new:true}
    )
    if(!update){
      return res.status(500).json({
        message:"Task not found",
        success:false
      })
    }
    console.log("Task updated Succesfully");
    return res.status(200).json({
      message:"Task Updated",
      success:true
    })
  
} catch (error) {
  console.log("Eroor",error);
  
}
}
const fetchTask = async (req,res)=>{
  try {
    const tasks = await Task.find()
    if(!tasks){
      return res.status(500).json({
        message:"No task found",
        success:false
      })
    }
    console.log("Task fetched successfully");
    return res.status(200).json({
      message:"Task fetched successfully",
      success:"true",
      tasks
    }) 
  } catch (error) {
    console.log("Eroor while fetching task", error);
    return res.status(500).json({
      message:"Task not fetched",
      success:false
    })
    
  }
}

export{
  addTask,
  deleteTask,
  updateTask,
  fetchTask
}