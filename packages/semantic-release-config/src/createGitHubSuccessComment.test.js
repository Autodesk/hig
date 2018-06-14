import template from "lodash.template";

import createGitHubSuccessComment from "./createGitHubSuccessComment";

describe("semantic-release-config/createGitHubSuccessComment", () => {
  const packageName = "@hig/booya";
  const payload = {
    version: "",
    branch: "master",
    nextRelease: {
      version: "0.2.0"
    },
    releases: [
      {
        name: "Example Release",
        url: "http://example.com"
      },
      {
        name: "Example Release v2",
        url: "http://example.com/two"
      }
    ],
    issue: {
      pull_request: "foo"
    }
  };

  it("returns a template source matching the given package name", () => {
    const result = createGitHubSuccessComment({ packageName });

    expect(result).toMatchSnapshot();
  });

  describe("when used with `lodash.template`", () => {
    it("renders a success comment in markdown", () => {
      const templateSource = createGitHubSuccessComment({ packageName });
      const templateCompiled = template(templateSource);
      const result = templateCompiled(payload);

      expect(result).toMatchSnapshot();
    });
  });
});
