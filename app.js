const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  res.send({message: "Awesome it works 🐻"});
});

app.use("/api", require("./routes/api.route"));

app.use("/employes", require("./routes/employes_route"));
app.use("/entreprises", require("./routes/entreprises_route"));
app.use("/travail", require("./routes/travail_route"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
