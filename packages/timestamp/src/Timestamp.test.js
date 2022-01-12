import React from "react";
import { mount } from "enzyme";
import MockDate from "mockdate";
import Timestamp from "./Timestamp";

const timeObject = {
  ago: "前",
  second: "秒",
  minute: "分鐘",
  hour: "小時",
  day: "天",
  week: "週",
  month: "個月",
  year: "年"
};
let mayFifth;

describe("timestamp", () => {
  beforeEach(() => {
    mayFifth = new Date("2018-05-05T12:00:00.000Z");
    MockDate.set(mayFifth);
  });

  afterEach(() => {
    MockDate.reset();
  });

  describe("given a time less than 1 minute ago", () => {
    it("displays in seconds", () => {
      const tenSecondsAgo = new Date(mayFifth);
      tenSecondsAgo.setSeconds(mayFifth.getSeconds() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenSecondsAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("10 seconds ago");
    });
    it("displays when second is localized", () => {
      const tenSecondsAgo = new Date(mayFifth);
      tenSecondsAgo.setSeconds(mayFifth.getSeconds() - 10);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={tenSecondsAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `10${timeObject.second}${timeObject.ago}`
      );
    });
  });

  describe("given a time between 1 minute and 1 hour ago", () => {
    it("displays in minutes", () => {
      const tenMinutesAgo = new Date(mayFifth);
      tenMinutesAgo.setMinutes(mayFifth.getMinutes() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenMinutesAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("10 minutes ago");
    });
    it("displays when minute is localized", () => {
      const tenMinutesAgo = new Date(mayFifth);
      tenMinutesAgo.setMinutes(mayFifth.getMinutes() - 10);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={tenMinutesAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `10${timeObject.minute}${timeObject.ago}`
      );
    });
  });

  describe("given a time between 1 hour and 1 day ago", () => {
    it("displays in hours", () => {
      const tenHoursAgo = new Date(mayFifth);
      tenHoursAgo.setHours(mayFifth.getHours() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenHoursAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("10 hours ago");
    });
    it("displays when hour is localized", () => {
      const tenHoursAgo = new Date(mayFifth);
      tenHoursAgo.setHours(mayFifth.getHours() - 10);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={tenHoursAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `10${timeObject.hour}${timeObject.ago}`
      );
    });
  });

  describe("given a time between 1 day and 1 week ago", () => {
    it("displays in days", () => {
      const threeDaysAgo = new Date(mayFifth);
      threeDaysAgo.setDate(mayFifth.getDate() - 3);

      const wrapper = mount(
        <Timestamp timestamp={threeDaysAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("3 days ago");
    });
    it("displays when day is localized", () => {
      const threeDaysAgo = new Date(mayFifth);
      threeDaysAgo.setDate(mayFifth.getDate() - 3);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={threeDaysAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `3${timeObject.day}${timeObject.ago}`
      );
    });
  });

  describe("given a time between 1 week and 1 month ago", () => {
    it("displays in weeks", () => {
      const thirtyDaysAgo = new Date(mayFifth);
      thirtyDaysAgo.setDate(mayFifth.getDate() - 30);

      const wrapper = mount(
        <Timestamp timestamp={thirtyDaysAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("4 weeks ago");
    });
    it("displays when week is localized", () => {
      const thirtyDaysAgo = new Date(mayFifth);
      thirtyDaysAgo.setDate(mayFifth.getDate() - 30);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={thirtyDaysAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `4${timeObject.week}${timeObject.ago}`
      );
    });
  });

  describe("given a time between 1 month and 1 year ago", () => {
    it("displays in months", () => {
      const tenMonthsAgo = new Date(mayFifth);
      tenMonthsAgo.setMonth(mayFifth.getMonth() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenMonthsAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("10 months ago");
    });
    it("displays when month is localized", () => {
      const tenMonthsAgo = new Date(mayFifth);
      tenMonthsAgo.setMonth(mayFifth.getMonth() - 10);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={tenMonthsAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `10${timeObject.month}${timeObject.ago}`
      );
    });
  });

  describe("given a time over 1 year ago", () => {
    it("displays in years", () => {
      const oneYearAgo = new Date(mayFifth);
      oneYearAgo.setFullYear(mayFifth.getFullYear() - 1);

      const wrapper = mount(<Timestamp timestamp={oneYearAgo.toISOString()} />);
      expect(wrapper).toHaveText("1 year ago");
    });

    it("displays when year is localized", () => {
      const oneYearAgo = new Date(mayFifth);
      oneYearAgo.setFullYear(mayFifth.getFullYear() - 1);

      const localizedWrapper = mount(
        <Timestamp
          timestamp={oneYearAgo.toISOString()}
          timeDescriptors={timeObject}
          plural={false}
          wordSpace={false}
        />
      );
      expect(localizedWrapper).toHaveText(
        `1${timeObject.year}${timeObject.ago}`
      );
    });
  });

  describe("when plural prop is set to false", () => {
    it("does not pluralize the ellapsed time descriptor", () => {
      const tenMonthsAgo = new Date(mayFifth);
      tenMonthsAgo.setMonth(mayFifth.getMonth() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenMonthsAgo.toISOString()} plural={false} />
      );
      expect(wrapper).toHaveText("10 month ago");
    });
  });

  describe("when wordSpace prop is set to false", () => {
    it("does not have any space between words", () => {
      const tenMonthsAgo = new Date(mayFifth);
      tenMonthsAgo.setMonth(mayFifth.getMonth() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenMonthsAgo.toISOString()} wordSpace={false} />
      );
      expect(wrapper).toHaveText("10monthsago");
    });
  });

  describe("when timestampSequence is provided", () => {
    it("the sequence should match the provided sequence provided", () => {
      const tenMonthsAgo = new Date(mayFifth);
      tenMonthsAgo.setMonth(mayFifth.getMonth() - 10);

      const wrapper = mount(
        <Timestamp
          timestamp={tenMonthsAgo.toISOString()}
          timestampSequence="cab"
        />
      );
      expect(wrapper).toHaveText("ago 10 months");
    });
  });
});
