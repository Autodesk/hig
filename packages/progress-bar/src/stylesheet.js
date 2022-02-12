import { keyframes } from "emotion";

function getProgressBarIndeterminateRules() {
  const indeterminateCycle = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(200px);
    }
  `;

  return {
    animation: `2s linear infinite ${indeterminateCycle}`
  };
}

function getProgressBarFillIndeterminateRules(themeData) {
  return {
    "&:before": {
      content: `""`,
      position: `absolute`,
      right: `2px`,
      width: `200px`,
      height: `4px`,
      backgroundImage: `linear-gradient(135deg, transparent, ${themeData["progress.bar.highlightColor"]} 100%)`,
      backgroundSize: `200px 4px`
    }
  };
}

/**
 * @param {Number} percent, an integer or float
 * @returns {Integer}
 */
export const renderedBarWidth = percent => {
  const percentageWidth = parseInt(percent, 10);
  if (!percentageWidth) {
    return null;
  }

  if (percentageWidth >= 100) {
    return 101;
  }
  return percentageWidth;
};

export default function stylesheet(props, themeData) {
  const { percentComplete, stylesheet: customStylesheet } = props;
  const isIndeterminate =
    percentComplete === null || percentComplete === undefined;

  const styles = {
    wrapper: {
      position: `relative`,
      borderRadius: themeData["progress.bar.borderRadius"],
      backgroundColor: themeData["progress.bar.backgroundColor"],
      overflow: `hidden`,
      width: `100%`,
      height: themeData["progress.bar.minHeight"]
    },
    progressBar: {
      position: `absolute`,
      top: 0,
      bottom: 0,
      left: `-3px`,
      display: `flex`,
      alignItems: `stretch`,
      transition: `width 0.3s ease-in-out`,
      width: isIndeterminate
        ? `100%`
        : `${renderedBarWidth(props.percentComplete)}%`,
      ...(isIndeterminate ? getProgressBarIndeterminateRules(themeData) : {})
    },
    progressBarFill: {
      backgroundColor: isIndeterminate
        ? `transparent`
        : themeData["progress.bar.highlightColor"],
      flex: `1 1 0`,
      ...(isIndeterminate
        ? getProgressBarFillIndeterminateRules(themeData)
        : {})
    },
    polygon: {
      fill: themeData["progress.bar.highlightColor"]
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
