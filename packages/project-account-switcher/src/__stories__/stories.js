import accountImage from "@hig/storybook/storybook-support/fixtures/account/dam.png";
import projectImage from "@hig/storybook/storybook-support/fixtures/project/architecture.png";

export default [
  {
    description: "default",
    getProps: () => ({
      accounts: [
        { id: "1", label: "Account 1" },
        { id: "2", label: "Account 2", image: accountImage }
      ],
      accountTitle: "Accounts",
      defaultAccount: "1",
      defaultProject: "2",
      projects: [
        { id: "1", label: "Project 1" },
        { id: "2", label: "Project 2", image: projectImage }
      ],
      projectTitle: "Projects"
    })
  }
];
