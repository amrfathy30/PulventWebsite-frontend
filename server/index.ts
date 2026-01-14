import { createServer } from "vite";

async function startServer() {
  const vite = await createServer({
    server: {
      port: 5000,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  });

  await vite.listen();
  console.log("Vite dev server running on port 5000");
}

startServer();
