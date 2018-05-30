export default function(baseStyles) {
  return {
    ...baseStyles,
    infoBody: {
      ...baseStyles.infoBody,
      fontFamily: '"ArtifaktElement", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", "Arial", sans-serif',
      color: '#000',
    },
    infoStory: {
      minHeight: '20vh',
      padding: '80px 40px'
    },
    jsxInfoContent: {
      borderTop: 'none'
    },
    source: {
      h1: {
        margin: '40px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '30px',
        borderBottom: 'none',
      },
      h2: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '26px'
      },
    },
  }
}