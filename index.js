const express = require('express')

const app = express()

app.get("/hello", (req, res) => {
    res.json({ hello: "world!" })
})

app.get("/math/:o/:a/:b", (req, res) => {
    const o = req.params.o
    const a = parseInt(req.params.a) || 0
    const b = parseInt(req.params.b) || 0
    
    switch(o.toLowerCase()) {
        case "add": res.json({result: a+b})
            break
        case "sub": res.json({result: a-b})
            break
        case "mul": res.json({result: a*b})
            break
        case "div": res.json({result: b!==0 ? a/b: "You've broken the rules! No dividing by zero..."})
            break
        case "mod": res.json({result: a%b || "Dude you can't divide by 0!"})
            break
        default: res.json({error: "wtf man??"})
    }

})

app.listen(727, () => console.log("Port 727 test port!"))

// test file is a test file
console.log("poop complete!");