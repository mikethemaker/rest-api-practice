const express = require('express')
const app = express()
const port = 1000
const amountOfTimesYouCanRequestPerSecond = 5
var count = 0

if(count < amountOfTimesYouCanRequestPerSecond) {
    
    count++

    app.get('/', (req, res) => {
        res.send('Hello World! ' + count)
    })
}
else
{
    app.get('/', (req, res) =>{
        res.send("You've been limited for spamming! Lol! " + count)
    })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})