//Import
import cors from "cors";
import express from "express";

//IMPORT ROUTES
import indexRoutes from "./routes/index.js";
import productsRoutes from "./routes/v1/products.js";
import userRoutes from "./routes/v1/user.js";

//Config
const app = express();
const PORT = process.env.PORT || 3355;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/v1", indexRoutes);
app.use("/v1", productsRoutes);
app.use("/v1", userRoutes);

app.listen(PORT, () => {
  console.log(
    `SERVER RUNNING ON http://localhost:${PORT}`,
    app.settings.env,
    process.env.npm_package_version,
    process.env.npm_package_name
  );
});

export default app;
