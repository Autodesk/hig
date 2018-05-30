export default [
  {
    description: "default",
    getProps: () => ({
      accounts: [{ label: "Account 1" }, { label: "Account 2" }],
      accountTitle: "Accounts",
      projects: [{ label: "Project 1" }, { label: "Project 2" }],
      projectTitle: "Projects"
    })
  }
];
