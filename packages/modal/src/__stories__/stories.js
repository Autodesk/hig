import React from "react";

export default [
  {
    description: "default",
    getProps: () => ({
      title: "Are you sure?",
      open: true,
      buttons: [{ title: "Cancel", type: "secondary" }, { title: "Ok" }],
      body: "This is the text body of my modal",
      style: "alternate",
      children: [
        <h1 key="h1">
          <u>This is my HTML title</u>
        </h1>,
        <p key="p">
          <i>This is my HTML content.</i>
        </p>
      ]
    })
  }
];
