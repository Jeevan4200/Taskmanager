const Task = require('../models/Task')
const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})}
    catch(error){
res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
      }
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
const updateTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task= await Task.findByIdAndDelete({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
          }
        res.status(200).json({id:taskID,data:req.body})

    }
    catch(error){
        res.status(500).json({ msg: error.message });
    }
}

const deleteTask =  async (req,res)=>{
   
    try{
        const task  =await Task.findOneAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
          }
          res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ msg: error.message });
    }
}
module.exports={ getAllTasks,
    createTask,getTask,updateTask,deleteTask
}