/* eslint-disable import/no-duplicates */
import * as WeaveDesign from "@weave-design/components";
import { Button as NamedButton } from "@weave-design/components";
import DefaultButton, {
  types as buttonTypes
} from "@weave-design/components/build/button";

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
