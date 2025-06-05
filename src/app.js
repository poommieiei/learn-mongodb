
const app = require("./appSetting");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const indexRoute = require("./routes/index.route");

const port = 3000;

const { connectDB } = require("./config/dbConnect");

// const uri = "mongodb+srv://test:qwerqwer@cluster0.paoe1wq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// let db;

// async function connectDB() {
//   try {
//     await client.connect();
//     db = client.db("sample_mflix");
//     console.log("✅ Connected to MongoDB");

//     app.locals.usersCollection = db.collection("users");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//   }
// }

// app.get("/employees", async (req, res) => {
//   try {
//     const users = await req.app.locals.usersCollection.find({}).toArray();

//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// app.post("/employees", async (req, res) => {
//   const user = req.body;
//   const result = await req.app.locals.usersCollection.insertOne(user);
//   res.json({ insertedId: result.insertedId });
// });

app.use("/api", indexRoute);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
