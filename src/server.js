import express from "express";
import userRoutes from "./user.routes";
import mainRoutes from "./main.routes";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100
});

app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/v1/", mainRoutes);
app.use("/v1/user/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
