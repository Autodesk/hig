import React from "react";
import "@hig/fonts/build/ArtifaktElementAll.css";

/**
 * Wraps each storybook component in a predictable class
 * that is targetable for Gemini tests.
 */

const styles = {
  marginTop: "24px", // Prevents "Show Info" button from appearing in Gemini tests
  padding: "12px"
};

export default function TestDecorator(storyFn) {
  return (
    <div className="storybook-component" style={styles}>
      {storyFn()}
    </div>
  );
}
