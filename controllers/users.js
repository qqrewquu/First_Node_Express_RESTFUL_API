
import { v4 as uuidv4 } from 'uuid';



// create empty mock users
let users = [];



export const getUsers = (req,res) =>{
    res.send(users);
    
};

export const getUser = (req, res) => {
    // get id 
    // 'req.params' = the parameter in the URL. Doc:  http://expressjs.com/en/4x/api.html#req.params
    // e.g. URL: /users/2 => req.params {id: 2}
    const { id } = req.params;

    // find provided user information if its id exists in the 'users'
    // array.find() will return the first matched variable's value. Doc: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const foundedUser = users.find(user => user.id === id);

    res.send(foundedUser);

};




export const createUser = (req, res) => {
    // get new added user information 
    // 'req.body' = the any formatted data we are sending in postman so we can access it in the post request body part
    const user = req.body;
    // create unique user ID
    const userId = uuidv4();
    // add created unique user id to 'user' variable,
    // and assign it a new variable 
    const userWithId = { ... user, id: userId };
    // add new user to the mocked user array
    users.push(userWithId);

    // send notification to client side once they new user added
    res.send(`User with the name ${userWithId.firstname} added to the database!`);
};


export const deleteUser = (req,res) => {
    const { id } = req.params;
    // array.filter(value => xxx): add value if xxx = True
    // so here, if provided id != current user id, add it to array
    users = users.filter( user => user.id !== id );

    res.send(`Users ${id} has been deleted`);
};

export const updateUser = (req,res) => {
    // user id
    const { id } = req.params;
    // user info
    const { firstname, lastname, age } = req.body;
    // find the user needed to be updated

    // 'user' is a reference to array 'users'. So if update 'user', its value
    // in 'users' is also updated. For more info: https://www.dyn-web.com/javascript/arrays/value-vs-reference.php
    const user = users.find( user => user.id === id )

     //update user if any of the value need to be updated
    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;
    res.send(`User ${id} has been updated`)
};