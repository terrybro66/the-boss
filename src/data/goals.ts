import fs from "fs";
import path from "path";

const GOALS_PATH = path.resolve("./docs/goals.md");

export function getGoals(): string {
  return fs.readFileSync(GOALS_PATH, "utf-8");
}