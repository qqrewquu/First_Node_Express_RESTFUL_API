import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "./../controllers/users.js"

const router = express.Router();


// '/users' are already started at 'index.js', so no need to specify it here
router.get('/',getUsers);

// get user information by provided ID
router.get('/:id', getUser);


// add new user to database 
// we can use Postman to create user, and it will trigger the post()
// below

// Postman can test this since Browser only get test the 
// GET request
router.post('/', createUser);


// delete user by provided ID
router.delete('/:id', deleteUser);


// update user information by provided ID 
router.patch('/:id',updateUser);



export default router;