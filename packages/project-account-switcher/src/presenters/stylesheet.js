export default function stylesheet() {
  return {
    itemLabel: {
      flex: `1 1 auto`,
      minWidth: 0,
      whiteSpace: `nowrap`,
      textOverflow: `ellipsis`,
      overflowX: `hidden`,
      cursor: `pointer`
    },
    imageWrapper: {
      display: `inline-block`,
      position: `relative`,
      flex: `0 0 auto`,
      overflow: `hidden`,
      height: `32px`,
      width: `32px`,
      borderRadius: `2px`,
      border: `1px solid #bec8d2`,
      color: `#485366`,
      textAlign: `center`,
      marginRight: `10px`
    },
    image: {
      position: `absolute`,
      top: 0,
      left: 0,
      border: `none`,
      cursor: `pointer`,
      color: `transparent`,
      "&[src='']": {
        display: `none`
      }
    },
    panel: {
      margin: 0,
      width: `200px`,
      padding: `0 10px 10px 10px`
    },
    switcherList: {
      marginTop: `30px`,
      marginBottom: `10px`,
      listStyle: `none`,
      padding: 0,
      "&:first-of-type": {
        marginTop: `10px`
      }
    },
    switcherItem: {
      margin: `0`,
      display: `flex`,
      height: `34px`,
      alignItems: `center`,
      width: `100%`,
      paddingTop: `8px`
    },
    switcherAccountImageWrapper: {
      display: `inline-block`,
      position: `relative`,
      flex: `0 0 auto`,
      overflow: `hidden`,
      height: `30px`,
      width: `60px`,
      borderRadius: `2px`,
      border: `1px solid #bec8d2`,
      color: `#485366`,
      textAlign: `center`,
      marginRight: `10px`
    },
    target: {
      display: `flex`,
      alignItems: `center`,
      cursor: `pointer`
    },
    targetItem: {
      margin: `0`,
      paddingLeft: `10px`,
      display: `flex`,
      height: `34px`,
      lineHeight: `34px`,
      alignItems: `center`,
      width: `100%`
    },
    targetCaret: {
      margin: `0 12px`
    }
  };
}
