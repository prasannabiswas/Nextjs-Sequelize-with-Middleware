import sequelize from "@/lib/connection/db";
import { initModels } from "../../../database/models/init-models";

let models: ReturnType<typeof initModels> | null = null;

export const getModels = async () => {
  if (!models) {
    try {
      await sequelize.authenticate();
      models = initModels(sequelize);
      console.log("✅ Sequelize connected & models initialized");
    } catch (err) {
      console.error("❌ Sequelize initialization error:", err);
      throw err;
    }
  }
  return models;
};
