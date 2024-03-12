const express = require('express')
const app = express()
const port = 888

app.get('/', (req, res) => {
  res.send('Hello World! Where do we go from here?')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
