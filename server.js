require("dotenv").config();

const app = require("./src/app");
const connentDB = require("./src/db/db");

connentDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


