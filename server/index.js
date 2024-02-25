const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'hackstreet',
  password        : 'Drowssap123',
  database        : 'assessment_quo_db'
});


app.post('/signup' , (req, res) => {
    const role = req.body.role;
    const email = req.body.email;
    const password = req.body.password;
    const fname = req.body.fname;
    const lname = req.body.lname;
    if (role == "student"){
        const school = req.body.school;

        db.query("INSERT INTO students (FirstName, LastName, Email, Pass, School) VALUES (?, ?, ?, ?, ?)", [fname, lname, email, password, school], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send({email: email})
            }
        })
    } else {
        db.query("INSERT INTO practitioners (FirstName, LastName, Email, Pass) VALUES (?, ?, ?, ?)", [fname, lname, email, password], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send({email: email})
            }
        })
    }

    
})


app.listen(6060, () => {
    console.log('server listening on port 6060');
})