const express = require('express');
const app = express();
const cors = require('cors');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


const db = pgp('postgres://hackstreet:Drowssap123@localhost:5432/assessment-quo-db')

const saltRounds = 10;



app.post('/signup' , (req, res) => {
    const role = req.body.role;
    const email = req.body.email;
    const password = req.body.password;
    const fname = req.body.fname;
    const lname = req.body.lname;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            res.status(418).send("Couldn't hash password...")
        } else {
            if (role == "student"){
                const school = req.body.school;


                db.any("INSERT INTO students (firstname, lastname, email, pass, school) VALUES ($1, $2, $3, $4, $5)", [fname, lname, email, hashedPassword, school]).then(() => {
                    res.send({email: email})
                })
                .catch(error => {
                    res.status(418).send("Couldn't resgister user")
                })


            } else {
                db.any("INSERT INTO practitioners (firstname, lastname, email, pass) VALUES ($1, $2, $3, $4)", [fname, lname, email, hashedPassword]).then(() => {
                    res.send({email: email})
                })
                .catch(error => {
                    res.status(418).send("Couldn't resgister user")
                })
            }
        }
    })
})


app.post('/login', (req, res) => {
    const role = req.body.role;
    const email = req.body.email;
    const password = req.body.password;
    if (role == "student"){

        db.any("SELECT * FROM students WHERE email = $1", [email]).then(result => {
            if(result.length < 1){
                res.status(418).send("Email doesn't match")
            }
            else {
                bcrypt.compare(password, result[0].pass, (err, match) => {
                    if (match) {
                        res.send({email})
                    }
                    if (!match) {
                        res.status(418).send("Password doesn't match")
                    }
                })
            }
            
        })
        .catch(err => {
            res.status(418).send(err.message)
        })


    } else {
        db.any("SELECT * FROM practitioners WHERE Email = $1", [email]).then(result => {
            if(result.length < 1){
                res.status(418).send("Email doesn't match")
            }
            else {
                bcrypt.compare(password, result[0].pass, (err, match) => {
                    if (match) {
                        res.send({email})
                    }
                    if (!match) {
                        res.status(418).send("Password doesn't match")
                    }
                })
            }
        })
    }
    
})


app.listen(6060, () => {
    console.log('server listening on port 6060');
})