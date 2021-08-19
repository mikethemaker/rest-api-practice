"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const app = express_1.default();
app.get("/hello", (_req, res) => {
    res.json({ hello: "world!" });
});
app.get("/math/:o/:a/:b", (req, res) => {
    const o = req.params.o;
    const a = parseInt(req.params.a) || 0;
    const b = parseInt(req.params.b) || 0;
    switch (o.toLowerCase()) {
        case "add":
            res.status(res.statusCode).json({ result: a + b });
            break;
        case "sub":
            res.status(res.statusCode).json({ result: a - b });
            break;
        case "mul":
            res.status(res.statusCode).json({ result: a * b });
            break;
        case "div":
            res.status(res.statusCode).json({ result: b !== 0 ? a / b : "You've broken the rules! No dividing by zero..." });
            break;
        case "mod":
            res.status(res.statusCode).json({ result: a % b || "Dude you can't divide by 0!" });
            break;
        default: res.json({ error: "wtf man??" });
    }
});
app.listen(727, () => console.log("Port 727 test port!"));
console.log(chalk_1.default.green("Server running! Go catch it! (200 OK)"));
//# sourceMappingURL=index.js.map