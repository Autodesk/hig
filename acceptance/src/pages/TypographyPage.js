import React from "react";
import Spacer from "@hig/spacer";
import Typography from "@hig/typography";
import "@hig/fonts/build/ArtifaktElement.css";

import ThemeRepeater from "../components/ThemeRepeater";

function TypographyPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            <Spacer spacing="xxl" />
            <Typography variant="h1">h1</Typography>
            <Spacer spacing="xxl" />
            <Typography variant="h2">h2</Typography>
            <Spacer spacing="xxl" />
            <Typography variant="h3">h3</Typography>
            <Spacer spacing="xxl" />
            <Typography>body - regular</Typography>
            <Spacer spacing="xxl" />
            <Typography fontWeight={600}>body - medium</Typography>
            <Spacer spacing="xxl" />
            <Typography fontWeight="bold">body - bold</Typography>
            <Spacer spacing="xxl" />
            <Typography variant="caption">caption - regular</Typography>
            <Spacer spacing="xxl" />
            <Typography variant="caption" fontWeight="bold">
              caption - bold
            </Typography>
            <Spacer spacing="xxl" />
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default TypographyPage;
