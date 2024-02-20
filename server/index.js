const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

const db = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'hackstreet',
  password        : 'Drowssap123',
  database        : 'assessment_quo_db'
});


app.get('/' , (req, res) => {
    db.query("INSERT INTO students (FirstName, LastName, Email, Pass, School) VALUES ('testFirst', 'testLast', 'test@uiowa.edu', 'pass123', 'University of Iowa')", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
})

app.listen(6060, () => {
    console.log('server listening on port 6060');
})