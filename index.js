import config from "./config/index.js";
import connectDB from "./config/db.js";
import express from "express"

const app =express()
// import app from "./app.js";


app.get("/",(req,res)=>{
	res.send("Server Live");
})
connectDB();

const port = config.port || 4000;


app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
