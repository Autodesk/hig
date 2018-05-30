/* eslint-disable import/no-duplicates */
import * as HIG from "@hig/components";
import { Button as NamedButton } from "@hig/components";
import DefaultButton, {
  types as buttonTypes
} from "@hig/components/build/button";

describe("components", () => {
  it("exports components as named exports", () => {
    expect(HIG).toHaveProperty("Button");
  });

  it("exports components as a module defaults", () => {
    expect(DefaultButton).toBeDefined();
  });

  it("exports that exact same component as a module default and named export", () => {
    expect(NamedButton).toBe(DefaultButton);
  });

  it("exports named exports in component modules", () => {
    expect(buttonTypes).toBeDefined();
  });
});
