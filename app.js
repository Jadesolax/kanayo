const express = require("express")

const app = express()

app.get("/", (req, res) =>{
    res.send("<h1>Welcome to DevOps IOntroduction</h1> <p>Happy learning<p>s")
})

const port = process.env.PORT || 3000

app.listen(port, console.log(`Server is now listening on port ${ports}`))