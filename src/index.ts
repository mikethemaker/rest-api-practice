import express, {Request, Response} from 'express'
import chalk from 'chalk'

const app = express()

app.get("/hello", (_req: Request, res: Response) => { // wtf???
    res.json({ hello: "world!" })
})

app.get("/math/:o/:a/:b", (req: Request, res: Response) => {
    const o = req.params.o
    const a = parseInt(req.params.a) || 0
    const b = parseInt(req.params.b) || 0

    switch(o.toLowerCase()) {
        case "add": res.status(res.statusCode).json({result: a+b})
            break
        case "sub": res.status(res.statusCode).json({result: a-b})
            break
        case "mul": res.status(res.statusCode).json({result: a*b})
            break
        case "div": res.status(res.statusCode).json({result: b!==0 ? a/b: "You've broken the rules! No dividing by zero..."})
            break
        case "mod": res.status(res.statusCode).json({result: a%b || "Dude you can't divide by 0!"})
            break
        default: res.json({error: "wtf man??"})
    }
    
})

app.listen(727, () => console.log("Port 727 test port!"))
// test file is a test file
console.log(chalk.green("Server running! Go catch it! (200 OK)"));