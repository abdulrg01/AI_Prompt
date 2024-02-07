require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const corsOptions = require("./config/corsOptions");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT;

connectDB();

app.use(logger);

app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));
app.use("/users", require("./routes/user"));
app.use("/posts", require("./routes/post"));

app.all("*", (req, res) => {
  res.status(400);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404, not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
