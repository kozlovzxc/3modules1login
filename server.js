const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username === 'admin' && password === 'password') {
    return res.send(JSON.stringify('Ok'))
  } else {
    return res.status(401).send(JSON.stringify('Invalid login or password'));
  }
})

app.post('/api/logout', (req, res) => res.send(JSON.stringify('Ok')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
