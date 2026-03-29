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
export function getTodoStats(todos: { task: string; done: boolean }[]) {
  const total = todos.length;
  const completed = todos.filter((t) => t.done).length;

  const progress =
    total === 0 ? "0.0%" : ((completed / total) * 100).toFixed(1) + "%";

  return {
    total,
    completed,
    progress,
  };
}
