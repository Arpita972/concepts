const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

let fakedb = [];

app.post("/postdata", (req, res) => {
  try {
    let postdata = { id: fakedb.length + 1, name: req.body.name };
    fakedb.push(postdata);
    return res.status(201).json({ "data inserted": postdata });
  } catch (error) {
    return res.status(400).send({ "error data": error });
  }
});

app.get("/data", (req, res) => {
  try {
    return res.status(200).json(fakedb);
  } catch (error) {
    return res.status(400).send({ "error data": error });
  }
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
