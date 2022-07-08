const express = require("express");
const app = express()
const PORT = process.env.PORT || 3500


app.use(express.json())

app.use("/api/goals", (require("./routes/goalRoutes")))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})