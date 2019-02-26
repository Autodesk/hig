import React from "react";
import Button from "@hig/button";
import Modal from "@hig/modal";
import Typography from "@hig/typography";
import merge from "lodash.merge";
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
              stylesheet={styles =>
                merge(styles, {
                  modal: {
                    overlay: {
                      position: "static",
                      height: "400px",
                      width: "500px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    },
                    window: { position: "static", transform: "initial" },
                    bodyContent: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }
                  }
                })
              }
            >
              <div>
                <Typography>When you see a modal...</Typography>
                <Typography>...you take notice.</Typography>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <div style={{ marginRight: "15px", display: "inline" }}>
                  <Button title="Label" type="outline" />
                </div>

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
