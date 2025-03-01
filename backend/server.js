const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const cors = require("cors");
const UserSchema=require('./models/User');
const bcrypt = require('bcrypt');



//middleeware
 const app = express();
 app.use(cors());
 app.use(express.json());
 const PORT = 5000


// MongoDB connection

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
    } catch (error) {
        console.log('Error in connecting to databsae', error);
        process.exit(1);
    }
}
connectDB();    

//Register API

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserSchema({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        res.json({ message: 'User registered...' });
        console.log('User registered successfully...');
    } catch (error) {
        console.log(error);
        res.json({ message: 'Error in registering user...' });
        res.status(500).json({ message: "Internal server error" });
    }
});

//Login API

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserSchema.findOne({ email });
        if(!user || !(await bcrypt.compare(password, user.password))) {
            {
                return res.status(400).json({ message: 'Invalid credentials...' });
            }
            res.json({ message: 'User logged in...', username: user.username });
        }
    } catch (error) {
        console.log(error);
    }        
});

// Connecting Server

app.listen(PORT, () => console.log(`Server is running on port 5000`));