import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

// this is saying using JSON data in the app
app.use(bodyParser.json());
 
// tell app access /user by using variable 'usersRoutes' from 'users.js' 
app.use('/users',usersRoutes);


// create routes

// get request to homepage
app.get('/',(req,res) => {res.send("Hello from HOME PAGE")});  



//make app listen incoming request
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))