const express = require('express')
const path = require('path')
const cors = require('cors');
const robot = require("robotjs");

const app = express()
app.use(cors())

const port = 3024
app.use('/app', express.static(path.join(__dirname, 'front')))


app.post('/:control', (req, res) => {
    if(req.params.control === 'eq') {
        robot.keyTap('=');
    }else if(req.params.control === 'minus') {
        robot.keyTap('-');
    }else
        robot.keyTap(req.params.control)
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
