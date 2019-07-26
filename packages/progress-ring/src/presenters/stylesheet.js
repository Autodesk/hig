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

const MaskEntering = keyframes`
  from {
    opacity: 0;
    transform: scale(2);
  }

  55% {
    opacity: 0;
    transform: scale(1.6);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const BackgroundExiting = color => keyframes`
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

const MaskExiting = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  10% {
    transform: scale(1.2);
  }

  90% {
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
  const { cssTransitionState, surface, mask } = props;

  const styles = {
    ring: {
      fontFamily: "ArtifaktElement",
      lineHeight: "1.6",
      boxSizing: "border-box",
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center"
    },

    background: {
      transformOrigin: "center",
      fill: themeData["progressRing.backgroundColor"]
    },

    mask: {
      transformOrigin: "center",
      fill: mask || themeData[`colorScheme.surfaceLevel${surface}Color`]
    },

    segment: {
      opacity: 0,
      "&:nth-of-type(even)": {
        fill: themeData["progressRing.highlightColor1"]
      },
      "&:nth-of-type(odd)": {
        fill: themeData["progressRing.highlightColor2"]
      }
    }
  };

  if (cssTransitionState === "entering") {
    styles.background.animation = `${BackgroundEntering} 0.65s ease-in-out`;
    styles.mask.animation = `${MaskEntering} 0.65s ease-out`;
  } else if (cssTransitionState === "exiting") {
    styles.background.animation = `${BackgroundExiting(
      themeData["progressRing.highlightColor1"]
    )} 0.466s ease-in forwards`;
    styles.mask.animation = `${MaskExiting} 0.466s ease-in forwards`;
    styles.segment.animation = `${SegmentsExiting} 0.466s linear`;
  } else if (cssTransitionState === "exited") {
    styles.mask.opacity = 0;
    styles.mask.transform = "scale(2)";
    styles.background.opacity = 0;
    styles.background.transform = "scale(0)";
  }

  return styles;
}
