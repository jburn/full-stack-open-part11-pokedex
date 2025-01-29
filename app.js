/* eslint-env node */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('v1')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
