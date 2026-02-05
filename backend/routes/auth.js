const router= require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth =require("../middleware/auth")

router.post("/register", async(req,res)=>{
    try {
        const{email, username, password}=req.body;
        const hashpassword=bcrypt.hashSync(password);
        
        const user=new User({email, username, password: hashpassword});
        await user.save().then(()=>{
            res.status(200).json({ user})
    })
    } catch (error) { 
        res.status(400).json({message: "user already exists"});
        
    }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Please signup first" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userData,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports=router