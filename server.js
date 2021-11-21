const express = require("express");
const app = express();

const path = require("path");
const distFolder = path.join(__dirname, "dist")
const port = 3000

app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.sendFile(path.join(distFolder, "index.html"))
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${3000}`);
})