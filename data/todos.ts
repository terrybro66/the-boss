import fs from "fs";
import path from "path";

interface Todo {
  task: string;
  done: boolean;
}

const TODOS_PATH = path.resolve("./data/todos.json");

export function getTodos(): Todo[] {
  const raw = fs.readFileSync(TODOS_PATH, "utf-8");
  return JSON.parse(raw) as Todo[];
}
