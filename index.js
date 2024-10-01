import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.listen(3000,()=>{
	console.log("serve is running")
})