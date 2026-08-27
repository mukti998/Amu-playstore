import { execSync } from "child_process";

const NODE_ENV = process.env.NODE_ENV || "production";

// Build client with Vite
console.log("Building client...");
execSync("npx vite build", {
  stdio: "inherit",
  env: { ...process.env, NODE_ENV },
});

// Bundle server for Vercel serverless function
console.log("Building server bundle...");
execSync(
  "npx esbuild server/index.ts --bundle --platform=node --format=cjs --outfile=dist/index.cjs --external:bcrypt --external:pg --external:connect-pg-simple",
  { stdio: "inherit" }
);

console.log("Build complete!");
