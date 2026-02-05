const router=require("express").Router();
const User=require("../models/user");
const List=require("../models/list");
const auth = require("../middleware/auth");


router.post("/addTask",auth, async(req,res)=>{
    try {
        console.log(req.user,'user')
         const{title,body}=req.body;
    const existingUser=await User.findOne({_id:req.user.id});
    if(existingUser){
        const list=new List({email:existingUser.email,body,title,user:existingUser._id});
        await list.save()
     return   res.status(200).json({list})

    }
    res.status(401).send({message:'user not registered..'}) 

        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
   
})
router.put("/updateTask/:id",auth, async(req,res)=>{
    try {
         const{title,body,email}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
       const list= await List.findByIdAndUpdate(req.params.id,{title,body});
         res.status(200).json({message:"Task updated"});
     

    }

        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
   
})

router.delete("/deleteTask/:id",auth, async (req, res) => {
  try {
    const { email } = req.params;

    const deletedTask = await List.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getTasks/:id", auth, async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id })
                           .sort({ createdAt: -1 });

    if (list.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json({ list });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports=router;