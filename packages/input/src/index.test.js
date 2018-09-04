import Input, {
  variants,
  availableVariants,
  availableInputModes
} from "./index";

describe("index", () => {
  it("exports default", () => {
    expect(Input).toBeDefined();
  });

  it("exports variants", () => {
    expect(variants).toBeDefined();
  });

  it("exports availableVariants", () => {
    expect(availableVariants).toBeDefined();
  });

  it("exports availableInputModes", () => {
    expect(availableInputModes).toBeDefined();
  });
});
