const spawn = require("child_process").spawn;
const execSync = require("child_process").execSync;
require("dotenv").config();

function env(key) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable ${key}`);
  return value;
}

execSync(`firebase -P ${env("FIREBASE_PROJECT")} deploy`, { stdio: "inherit" });
