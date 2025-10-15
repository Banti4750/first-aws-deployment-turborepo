"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const client_1 = require("@repo/db/client");
const server = new ws_1.WebSocketServer({
    port: 3001
});
server.on("connection", async (socket) => {
    await client_1.client.user.create({
        data: {
            email: Math.random().toString(),
            password: "banti"
        }
    });
    socket.send("hi there");
});
