import express from "express";
import routes from "./routes";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
