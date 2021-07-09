import app from "./app";
import { startConnection } from "./database";

async function init(): Promise<void> {
  await startConnection();
  app.listen(app.get("port"));
  console.log("Server on port ", app.get("port"));
}

init();
