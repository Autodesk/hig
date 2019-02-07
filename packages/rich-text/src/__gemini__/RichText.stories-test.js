import React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "@hig/text-link";
import ProgressBar from "@hig/progress-bar";

import RichText from "../index";

function Content() {
  return (
    <div>
      <h1>Heading</h1>
      <p>
        The RichText component lets me include any React children, including:
      </p>
      <a href="https://autodesk.com">Anchors</a>
      <hr />
      <TextLink link="http://www.example.com">A text link</TextLink>
      <ul key="ul">
        <li>
          <strong>Any old HTML tag</strong>
        </li>
        <li>React components</li>
      </ul>
      <p>
        <b>Bolded text</b>
      </p>
      <ol>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ol>
      <section id="headings">
        <h3>
          <a href="#headings">Headings</a>
        </h3>
        <p>
          Elements <code>h1</code>, <code>h2</code>, <code>h3</code>,{" "}
          <code>h4</code>,<code>h5</code>, <code>h6</code> make up the{" "}
          <em>heading content</em> category.
        </p>
        <hgroup>
          <h1>h1 I am most important.</h1>
          <h2>
            h2 Back in my quaint <a href="//example.com">garden</a>
          </h2>
          <h3>
            h3 Jaunty <a href="//example.com">zinnias</a> vie with flaunting
            phlox.
          </h3>
          <h4>
            h4 Five or six big jet planes zoomed quickly by the new tower.
          </h4>
          <h5>
            h5 Expect skilled songwriters to use many jazzy, quaint old
            alphabets effectively.
          </h5>
          <h6>h6 Pack my box with five dozen liquor jugs.</h6>
        </hgroup>
      </section>
      <blockquote>
        <p>
          This is a multiline blockquote with a cite reference. People think
          focus means saying yes to the thing you’ve got to focus on. But that’s
          not what it means at all. It means saying no to the hundred other good
          ideas that there are. You have to pick carefully. I’m actually as
          proud of the things we haven’t done as the things I have done.
          Innovation is saying no to 1,000 things.
        </p>
        <footer>
          Steve Jobs, <cite>Apple Worldwide Developers’ Conference, 1997</cite>
        </footer>
      </blockquote>
      <p>
        <code>details</code> and <code>summary</code>:
      </p>
      <details>
        <summary>
          Copying... <ProgressBar percentComplete={25} /> 25%
        </summary>
        <dl>
          <dt>Transfer rate:</dt>
          <dd>452KB/s</dd>
          <dt>Duration:</dt>
          <dd>01:16:27</dd>
          <dt>Color profile:</dt>
          <dd>SD (6-1-6)</dd>
          <dt>Dimensions:</dt>
          <dd>320×240</dd>
        </dl>
      </details>
    </div>
  );
}

storiesOf("RichText", module).add("default", () => (
  <RichText>
    <Content />
  </RichText>
));
