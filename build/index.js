// server/index.ts
import { createServer } from "vite";
async function startServer() {
  const vite = await createServer({
    server: {
      port: 3e3,
      host: "0.0.0.0",
      allowedHosts: true
    }
  });
  await vite.listen();
  console.log("Vite dev server running on port 3000");
}
startServer();
