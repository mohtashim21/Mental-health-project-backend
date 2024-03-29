const express = require("express");

const server = express();
const port = 8080;

server.get("/",(req,res) => {
    res.send("Home route");
});

server.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
});