import React from "react";
import Button from "@hig/button";
import Modal from "@hig/modal";
import Typography from "@hig/typography";
import Spacer from "@hig/spacer";
import ThemeRepeater from "../components/ThemeRepeater";

function ModalPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            <Modal
              open
              title="Modal Time"
              stylesheet={styles => ({
                ...styles,
                modal: {
                  ...styles.modal,
                  overlay: {
                    ...styles.modal.overlay,
                    position: "static",
                    height: "400px",
                    width: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  },
                  window: {
                    ...styles.modal.window,
                    position: "static",
                    transform: "initial"
                  },
                  bodyContent: {
                    ...styles.modal.bodyContent,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }
                }
              })}
            >
              <div>
                <Typography>When you see a modal...</Typography>
                <Typography>...you take notice.</Typography>
              </div>
              <div style={{ display: "flex", alignSelf: "flex-end" }}>
                <Button title="Label" type="outline" />
                <Spacer spacing="s" />
                <Button title="Label" type="outline" />
              </div>
            </Modal>
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default ModalPage;
