import multer, { StorageEngine, Multer } from "multer";
import { v4 as uuidv4 } from "uuid"; //libreria generadora de ids
import path from "path";

function multerCustom(destination: string): Multer {
  //devuelve una instancia con una destinacion custom dependiendo el archivo
  const storage: StorageEngine = multer.diskStorage({
    destination,
    //necesario para generar un nombre
    filename: (req, file, cb) => {
      // console.log(file);
      cb(null, uuidv4() + path.extname(file.originalname));
    },
  });
  return multer({ storage });
}
export default multerCustom;
