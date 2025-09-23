import { WebSocketServer } from "ws";
import { client } from '@repo/db/client';

const server = new WebSocketServer({
    port: 3001
})

server.on("connection", async (socket) => {
    await client.user.create({
        data: {
            email: Math.random().toString(),
            password: "banti"
        }
    })
    socket.send("hi there")
})