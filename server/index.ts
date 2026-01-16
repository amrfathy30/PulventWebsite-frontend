import { createServer } from "vite";
import path from "path";

async function startServer() {
  const vite = await createServer({
    root: path.resolve(process.cwd()),
    server: {
      port: 5000,
      host: "0.0.0.0",
      allowedHosts: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
        "@shared": path.resolve(process.cwd(), "shared"),
        "@assets": path.resolve(process.cwd(), "attached_assets"),
      },
    },
  });

  await vite.listen();
  console.log("Vite dev server running on port 5000");
}

startServer();
