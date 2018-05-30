import React from "react";

export default [
  {
    description: "default",
    getProps: () => ({
      children: [
        "The RichText component lets me include any React children, including:",
        <ul key="ul">
          <li>
            <strong>Any old HTML tag</strong>
          </li>
          <li>React components</li>
        </ul>
      ]
    })
  },
  {
    description: "dangerously setting inner HTML",
    getProps: () => ({
      dangerouslySetInnerHTML: {
        __html: "<p>RichText works with HTML strings too.</p>"
      }
    })
  }
];
