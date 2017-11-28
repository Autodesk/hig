import React from "react";
import { mount } from "enzyme";

import { Modal as VanillaModal } from "hig-vanilla";
import ModalAdapter from "./ModalAdapter";

describe("ModalAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <ModalAdapter
          higInstance={mockInstance}
          open
          onCloseClick={() => {}}
          onOverlayClick={() => {}}
          body="This is some text in my modal"
          style="standard"
          title="My modal"
          buttons={[{ title: "Ok" }, { title: "Cancel" }]}
        >
          <div>Click me to see the Modal</div>
        </ModalAdapter>
      );
      mount(<ModalAdapter higInstance={mockInstance} open={false} />);
    }).toImplementHIGInterfaceOf(VanillaModal);
  });
});
