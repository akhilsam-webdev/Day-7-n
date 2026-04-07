const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

app.post("/note", async (req, res) => {
  const { titel, dis } = req.body;

  const note = await noteModel.create({
    titel,
    dis,
  });

  res.status(201).json({
    msg: "note created suff....",
    note,
  });
});

app.get("/note", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    msg: "fetched all notes",
    note,
  });
});

app.delete("/note/:index",async(req,res)=>{
  const note = await noteModel.deleteOne({_id:req.params.index})

  res.status(200).json({
    msg:"note deleted suff"
  })
})

module.exports = app;
