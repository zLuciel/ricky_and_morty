const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const routes = require("./Routes/route")

const app = express()
const port = process.env.PORT || 3005;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(port)
app.use(morgan("dev")) 
app.use(bodyParser.json())
console.log(`server on port ${port}`);

app.use("/", routes)