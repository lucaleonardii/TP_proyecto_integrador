import { connect } from "mongoose";
import config from "./config"

(async () => {
  try {
    const db = await connect(config.MONGODB_CONNECTION_STR);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
