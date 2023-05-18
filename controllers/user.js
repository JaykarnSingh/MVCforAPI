const User=require('../models/user')
const Ticket=require('../models/ticket')
const Clinic=require('../models/clinic')
const UserLogin=require('../models/login')

const jwt=require('jsonwebtoken');
const JWT_SECRET="sdhflksdhkjkjdkjvdjfdb";

// const http=require('http')


//authentication for other pages APIs....................................................................................
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
 
  jwt.verify(token, JWT_SECRET, (err, user) => {
     if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
 };


//...................................................USER
//post user data
const postData=(req,res,next)=>{
const user=new User(req.body)
const result=user.save();
res.send(result);
}
//get user data
const getData = async (req, res, next) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.send(users);
      } else {
        res.send({ result: "no users found" });
      }
    } catch (error) {
      next(error); 
    }
  };




//.........................................................................TICKET
//post Ticket information
const postTicket=(req,res,next)=>{
    const user=new Ticket(req.body)
    const result=user.save();
    res.send(result);
    }
//get ticket information
const getTicketData = async (req, res, next) => {
    try {
      const users = await Ticket.find();
      if (users.length > 0) {
        res.send(users);
      } else {
        res.send({ result: "no ticket info. found" });
      }
    } catch (error) {
      next(error); 
    }
  };   




//................................................................  CLINIC
//post clinic data
const postClinic=(req,res,next)=>{
        const user=new Clinic(req.body)
        const result=user.save();
        res.send(result);
        }
//get clinic data
const getClinicData = async (req, res, next) => {
    try {
      const users = await Clinic.find();
      if (users.length > 0) {
        res.send(users);
      } else {
        res.send({ result: "no ticket info. found" });
      }
    } catch (error) {
      next(error); 
    }
  };       




//user login.....................................................................
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserLogin.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  if (user.password !== password) {
    return res.status(403).json({ error: 'Invalid  password' });
  }
  const token=jwt.sign(
    {userId:user._id},
    JWT_SECRET,
    {expiresIn:"1h"}
  );



  res.json({
    status: 200,
    message: "success",
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
      clinicName: user.clinicName,
      clinicCode: user.clinicCode,
      clinicBlock: user.clinicBlock,
      token:token,
      // token:accessToken
    },
  });
}














module.exports={
    postData,
    postTicket,
    postClinic,

    getData,
    getTicketData,
    getClinicData,

    loginUser, 
    authenticateToken,


    // getToken
}