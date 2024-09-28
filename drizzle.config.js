/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
});
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DB,
    }
  };