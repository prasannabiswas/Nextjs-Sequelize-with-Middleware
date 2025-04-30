import { getSequelize } from "@/lib/db";
import { Member } from "@/models/member";

const sequelize = getSequelize();

const dbInit = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected...");
    if (process.env.NODE_ENV !== "production") {
      await sequelize.sync({ alter: true }); // ⚡ Only alter in dev
      console.log("✅ Models synchronized...");
    }
  } catch (error) {
    console.error("❌ Unable to connect to database:", error);
  }
};

export { sequelize, Member, dbInit };
