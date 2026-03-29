import { describe, it, expect, beforeAll } from "vitest";
import { writeFileSync } from "fs";
import path from "path";
import { getTodos } from "../../src/data/todos";

interface Todo {
  task: string;
  done: boolean;
}

const TEST_FILE = path.resolve("./data/todos.json");

describe("getTodos", () => {
  beforeAll(() => {
    const mockTodos: Todo[] = [
      { task: "Task 1", done: true },
      { task: "Task 2", done: false },
    ];
    writeFileSync(TEST_FILE, JSON.stringify(mockTodos, null, 2));
  });

  it("should load todos from JSON file", () => {
    const todos = getTodos();

    expect(Array.isArray(todos)).toBe(true);
    expect(todos.length).toBe(2);
  });

  it("should return correct todo structure", () => {
    const todos = getTodos();

    expect(todos[0]).toHaveProperty("task");
    expect(todos[0]).toHaveProperty("done");
  });
});
