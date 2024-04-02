const mysqlconnection=require('./connection')

const express=require('express')
const bodyParser = require('body-parser');
const cors=require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const PORT=4000
const app=express()


app.use(bodyParser.json())
app.use(express.json())
app.use(cors());

//create api login
app.post('/loginpage', (req, res) => {
    // const emp = req.body
    const {user_name,user_password}=req.body;

    mysqlconnection.query('SELECT * FROM userlist WHERE user_name = ?', [user_name], async (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }

        const user = results[0];

        // Compare the provided password with the hashed password from the database
        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);

        console.log(isPasswordValid)
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }

        // Generate JWT token
        const token = jwt.sign({ username: user.user_name, userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ token });
    });
});

//create api for show all data



app.get('/loginalldata', (req, resp) => {
    mysqlconnection.query('SELECT * From userlist', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            resp.send(res)
            console.log(res)
        }
    })
})


app.listen(PORT,()=>{
    console.log('Express Server Running on Port No 4000')
})
