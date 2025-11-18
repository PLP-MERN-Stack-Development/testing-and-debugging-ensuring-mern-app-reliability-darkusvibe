import express from "express";
import cors from "cors";
import bugsRoute from "./routes/bugs.js";

const app = express();
app.use(cors());
app.use(express.json());

// Use the bugs route
app.use("/api/bugs", bugsRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
