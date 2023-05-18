const express=require('express');
const router=express.Router();
const handleAllUsers=require('../controllers/user')

//post any data api
router.post('/PostUserData',handleAllUsers.authenticateToken,handleAllUsers.postData);
router.post('/PostUserTicket',handleAllUsers.authenticateToken,handleAllUsers.postTicket);
router.post('/postClinic',handleAllUsers.authenticateToken,handleAllUsers.postClinic);

//get any data api
router.get('/GetUserData',handleAllUsers.authenticateToken,handleAllUsers.getData);
router.get('/GetTicketData',handleAllUsers.authenticateToken,handleAllUsers.getTicketData);
router.get('/GetClinicData',handleAllUsers.authenticateToken,handleAllUsers.getClinicData);

//login api
router.post('/userLogin',handleAllUsers.loginUser);


// router.post('/gettoken',handleAllUsers.getToken);
module.exports=router;