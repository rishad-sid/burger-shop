const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_SERVER, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected to mongoDB"))
.catch(err=>console.error("Connection failed"));

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`Server started at port ${port}`);
})