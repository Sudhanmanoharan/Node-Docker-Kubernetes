const express = require('express');
let app = express()

app.get("/", (req, res) => {
    res.send("Working Fine")
})

app.listen(3000, () => { console.log("Node JS running successfully") })