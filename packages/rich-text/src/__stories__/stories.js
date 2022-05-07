import React from "react";

export default [
  {
    description: "default",
    getProps: () => ({
      children: (
        <div>
          <h1>Heading</h1>
          <p>
            The RichText component lets me include any React children,
            including:
          </p>
          <a href="https://autodesk.com">Anchors</a>
          <ul key="ul">
            <li>
              <strong>Any old HTML tag</strong>
            </li>
            <li>React components</li>
          </ul>
          <b>Bolded text</b>
        </div>
      ),
    }),
  },
  {
    description: "dangerously setting inner HTML",
    getProps: () => ({
      dangerouslySetInnerHTML: {
        __html: "<p>RichText works with HTML strings too.</p>",
      },
    }),
  },
];
