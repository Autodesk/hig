import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import React from "react";
import HigNodeList from "./HIGNodeList";

import DropdownComponent, {
  DropdownAdapter
} from "../adapters/FormElements/DropdownAdapter";
import OptionComponent, {
  OptionAdapter
} from "../adapters/FormElements/OptionAdapter";

describe("HigNodeList", () => {
  const Dropdown = HIG.Dropdown;
  const Option = HIG.Option;
  const dropdownProps = {
    label: "test dropdown label",
    placeholder: "test dropdown placeholder",
    instructions: "test dropdown instructions"
  };

  const optionProps = { label: "test label", value: "test value" };
  const optionProps1 = { label: "test label1", value: "test value1" };
  const optionProps2 = { label: "test label2", value: "test value2" };

  const spy = jest.fn();

  const dropdownInstance = new Dropdown(dropdownProps);

  const optionInstance = new OptionAdapter(HIG.Option, optionProps);
  const optionInstance1 = new OptionAdapter(HIG.Option, optionProps1);
  const dropdownList = new HigNodeList({
    OptionAdapter: {
      type: OptionAdapter,
      HIGConstructor: HIG.Option,
      onAdd: (instance, beforeInstance) => {
        dropdownInstance.addOption(instance, beforeInstance);
      }
    }
  });

  const dropdownList1 = new HigNodeList({
    OptionAdapter: {
      type: OptionAdapter,
      HIGConstructor: HIG.Option,
      onAdd: (instance, beforeInstance) => {
        dropdownInstance.addOption(instance, beforeInstance);
      }
    }
  });
  const dropdownList2 = new HigNodeList({
    OptionAdapter: {
      type: OptionAdapter,
      HIGConstructor: HIG.Option,
      onAdd: (instance, beforeInstance) => {
        dropdownInstance.addOption(instance, beforeInstance);
      }
    }
  });

  const dropdownList3 = new HigNodeList({
    OptionAdapter: {
      type: OptionAdapter,
      HIGConstructor: HIG.Option,
      onAdd: (instance, beforeInstance) => {
        dropdownInstance.addOption(instance, beforeInstance);
      }
    }
  });

  describe("#createElement", () => {
    it("correctly creates elements", () => {
      // dropdownList.componentDidMount();
      dropdownList.insertBefore(optionInstance);
      expect(dropdownList.nodes[0]).toEqual(optionInstance);
      expect(dropdownList.createElement(OptionAdapter, optionProps)).toEqual(
        optionInstance
      );
    });
  });

  describe("#insertBefore with no index", () => {
    it("correctly orders elements", () => {
      dropdownList1.insertBefore(optionInstance);
      dropdownList1.insertBefore(optionInstance1);
      expect(dropdownList1.nodes[1]).toEqual(optionInstance1);
    });
  });

  describe("#insertBefore with index", () => {
    it("correctly inserts elements at appropriate index", () => {
      dropdownList2.insertBefore(optionInstance);
      dropdownList2.insertBefore(optionInstance1, 0);
      expect(dropdownList2.nodes[0]).toEqual(optionInstance1);
      expect(dropdownList2.nodes[1]).toEqual(optionInstance);
    });    
  });

  describe("#removeChild", () => {
    it("removes child from dropdown", () => {
      dropdownList3.insertBefore(optionInstance);
  		dropdownList3.insertBefore(optionInstance1);

  		expect(dropdownList3.nodes[1]).toEqual(optionInstance1);

  		dropdownList3.removeChild(dropdownList.nodes[0]);
  		expect(dropdownList3.nodes[0]).toEqual(optionInstance1);
    });
  });

  describe("check node list interface", () => {
    it("throws an error if type not specified", () => {
      expect(() => {
        new HigNodeList({
          OptionAdapter: {
            HIGConstructor: HIG.Option,
            onAdd: (instance, beforeInstance) => {
              dropdownInstance.addOption(instance, beforeInstance);
            }
          }  
        })
      }).toThrow("type is required")
    });

    it("throws an error if HIGConstructor not specified", () => {
      expect(() => {
        new HigNodeList({
          OptionAdapter: {
            type: OptionAdapter,
            onAdd: (instance, beforeInstance) => {
              dropdownInstance.addOption(instance, beforeInstance);
            }
          }
        });
      }).toThrow("HIGConstructor is required");
    });

    it("throws an error if onAdd callback not specififed", () => {
      expect(() => {
        new HigNodeList({
          OptionAdapter: {
            type: OptionAdapter,
            HIGConstructor: HIG.Option
          }
        });
      }).toThrow("onInsert is required");
    });
  });  
});
