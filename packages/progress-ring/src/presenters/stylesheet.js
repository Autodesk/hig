import { keyframes } from "emotion";

const BackgroundEntering = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  61% {
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const BackgroundExiting = (color) => keyframes`
    from {
      opacity: 1;
      transform: scale(1);
      fill: ${color};
    }

    10% {
      transform: scale(1.1);
    }

    60% {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  `;

const SegmentsExiting = keyframes`
  from {
    opacity: 1;
  }

  28% {
    opacity: 0;
  }
`;

export default function stylesheet(props, themeData) {
  const { cssTransitionState, stylesheet: customStylesheet } = props;

  const styles = {
    ring: {
      fontFamily: "ArtifaktElement",
      lineHeight: "1.6",
      boxSizing: "border-box",
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },

    background: {
      transformOrigin: "center",
      fill: themeData["progress.ring.backgroundColor"],
    },

    segment: {
      opacity: 0,
      "&:nth-of-type(even)": {
        fill: themeData["progress.ring.highlightColor1"],
      },
      "&:nth-of-type(odd)": {
        fill: themeData["progress.ring.highlightColor2"],
      },
    },
  };

  if (cssTransitionState === "entering") {
    styles.background.animation = `${BackgroundEntering} 0.65s ease-in-out`;
  } else if (cssTransitionState === "exiting") {
    styles.background.animation = `${BackgroundExiting(
      themeData["progress.ring.highlightColor1"]
    )} 0.466s ease-in forwards`;
    styles.segment.animation = `${SegmentsExiting} 0.466s linear`;
  } else if (cssTransitionState === "exited") {
    styles.background.opacity = 0;
    styles.background.transform = "scale(0)";
  }

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
