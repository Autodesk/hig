import React from "react";
import RichText from "@hig/rich-text";
import ThemeRepeater from "../components/ThemeRepeater";

function RichTextPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            <RichText>
              <h1>
                h1 Let's build some happy <a href>little clouds</a> up here.
              </h1>
              <p>
                p There we are. No worries. No cares. Just float and wait for
                the wind to blow you around.
              </p>
              <h2>
                h2 Just think about these things in your mind - then bring them
                into your world.
              </h2>
              <h3>h3 I'll go over the colors one more time that we use:</h3>
              <ul>
                <li>Titanium white</li>
                <li>
                  Thalo <strong>green</strong>
                </li>
                <li>
                  Prussian <b>blue</b>
                </li>
              </ul>
              <h4>
                h4 If you didn't have baby clouds, you wouldn't have big clouds.
              </h4>
              <h5>h5 Don't hurry. Take your time and enjoy.</h5>
            </RichText>
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default RichTextPage;
