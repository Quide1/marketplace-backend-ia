import express from "express";
import cors from "cors";
import { routerRouter } from "./routes/route";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api",routerRouter );
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
