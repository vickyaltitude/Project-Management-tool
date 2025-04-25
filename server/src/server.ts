import { config } from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
/* Route imports */
import projectRoutes from "./routes/project.route";
import taskRoutes from "./routes/task.route";
import searchRoutes from "./routes/searcRoute";
import userRoutes from "./routes/user.route";
import teamRoutes from "./routes/teams.route";
/* Configs */
config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

/* Routes */
app.get("/", (req, res) => {
  res.send("Home route");
});

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
/* Server */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
