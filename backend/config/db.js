import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.error("DB Connecting Error", error));
};
