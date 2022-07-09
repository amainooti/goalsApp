require("dotenv").config()
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3500
const {errorHandler} = require("./middleware/errorMiddleware")
const colors = require("colors")
const {connectDB} = require("./config/db");


// @db connection
connectDB()

// @middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// @route
app.use("/api/goals", (require("./routes/goalRoutes")))
app.use("/api/users", (require("./routes/userRoutes")))
app.use(errorHandler)


// @Server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
