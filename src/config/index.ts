import dotenv from "dotenv";
dotenv.config(); // carga las variables de entorno

const configENV = {
  DB: process.env.MONGO_URI || "mongodb://localhost/cafe",
  PORT: process.env.PORT || "3000",
};
export default configENV;
