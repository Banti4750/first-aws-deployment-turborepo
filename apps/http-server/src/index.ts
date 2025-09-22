import express from 'express';
import { client } from '@repo/db/client'
const app = express();

app.get('/', (req, res) => {
    res.send("Hi Banti")
})

app.post('signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        await client.user.create({
            data: {
                email,
                password
            }
        })

        res.status(200).json({
            message: "signup done"
        })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
