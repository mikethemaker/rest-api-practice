const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.json({ hello: "world!" })
  })

// test file is a test file
console.log("poop complete!");