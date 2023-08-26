let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());





const userrouter = require("./routes/user.route");


app.use("/users", userrouter);





app.get("/", (req, res) => {
    res.status(200).send("welcome to the userclient");    
});





require("./database.js");
app.listen(3000, () => {
  try {
    console.log("Server started on port 3000");
  } catch (err) {
    console.log(err);
  }
});
