import express from "express";
import morgan from "morgan"; //ver peticiones
import cors from "cors";
import path from "path";
import appRoutes from "./routes";
import configENV from "./config";
const app = express();
//settings
app.set("port", configENV.PORT);

/* middlewares */
app.use(morgan("dev"));
app.use(express.json()); //recibir json
app.use(cors());
/* routes */
app.use("/v1/api", appRoutes);
//directorio de archivos publicos
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
