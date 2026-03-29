import { describe, it, expect } from "vitest";
import { getTodoStats } from "../../src/data/todos";

describe("getTodoStats", () => {
  it("should calculate total, completed, and progress correctly", () => {
    const todos = [
      { task: "A", done: true },
      { task: "B", done: false },
      { task: "C", done: true },
    ];

    const stats = getTodoStats(todos);

    expect(stats.total).toBe(3);
    expect(stats.completed).toBe(2);
    expect(stats.progress).toBe("66.7%");
  });

  it("should return 0% progress when no todos are completed", () => {
    const todos = [
      { task: "A", done: false },
      { task: "B", done: false },
    ];

    const stats = getTodoStats(todos);

    expect(stats.progress).toBe("0.0%");
  });

  it("should return 100% progress when all todos are completed", () => {
    const todos = [
      { task: "A", done: true },
      { task: "B", done: true },
    ];

    const stats = getTodoStats(todos);

    expect(stats.progress).toBe("100.0%");
  });

  it("should handle empty todo list", () => {
    const stats = getTodoStats([]);

    expect(stats.total).toBe(0);
    expect(stats.completed).toBe(0);
    expect(stats.progress).toBe("0.0%");
  });
});
