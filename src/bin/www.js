

// const Appwep = require(`${__dirname}/../apps/app.js`);
const app = require("../apps/app.js");

const config = require("config");

const server = app.listen(port = config.get("app.port"), (req, res) => {
    console.log("Dang lang nghe tren cong " + port)
}) ;

