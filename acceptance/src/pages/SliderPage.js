import React from "react";
import Slider from "@hig/slider";
import ThemeRepeater from "../components/ThemeRepeater";

function SliderPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            <Slider min={0} max={100} defaultValue={25} />
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default SliderPage;
