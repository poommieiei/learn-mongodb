
const app = require("./appSetting");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const indexRoute = require("./routes/index.route");

const port = 3000;

const { connectDB } = require("./config/dbConnect");

app.use("/api", indexRoute);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
