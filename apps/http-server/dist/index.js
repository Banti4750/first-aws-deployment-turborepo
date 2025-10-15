"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Hi Banti");
});
app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    try {
        await client_1.client.user.create({
            data: {
                email,
                password
            }
        });
        res.status(200).json({
            message: "signup done"
        });
    }
    catch (error) {
        res.status(500).json({ message: "error" });
    }
});
app.listen(3002, () => {
    console.log("server is running on port 3002");
});
