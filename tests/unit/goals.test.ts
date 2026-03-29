import { describe, it, expect, beforeAll } from "vitest";
import { writeFileSync } from "fs";
import path from "path";
import { getGoals } from "../../src/data/goals";

const GOALS_FILE = path.resolve("./docs/goals.md");

describe("getGoals", () => {
  beforeAll(() => {
    const mockGoals = `
# Project Goals

- Build MVP
- Improve performance
- Ship 3 features
`;
    writeFileSync(GOALS_FILE, mockGoals);
  });

  it("should load goals from markdown file", () => {
    const goals = getGoals();

    expect(typeof goals).toBe("string");
    expect(goals.length).toBeGreaterThan(0);
  });

  it("should contain expected content", () => {
    const goals = getGoals();

    expect(goals).toContain("Build MVP");
    expect(goals).toContain("Improve performance");
  });
});
