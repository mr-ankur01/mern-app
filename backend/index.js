const app = require("./app");
const mongoDb = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await mongoDb();
  console.log(`server running at http://localhost:${port}`);
});
