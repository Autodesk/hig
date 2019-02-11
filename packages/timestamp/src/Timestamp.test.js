import React from "react";
import { mount } from "enzyme";
import MockDate from "mockdate";
import Timestamp from "./Timestamp";

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
  });

  describe("given a time between 1 hour and 1 day ago", () => {
    it("displays in minutes", () => {
      const tenHoursAgo = new Date(mayFifth);
      tenHoursAgo.setHours(mayFifth.getHours() - 10);

      const wrapper = mount(
        <Timestamp timestamp={tenHoursAgo.toISOString()} />
      );
      expect(wrapper).toHaveText("10 hours ago");
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
  });
});
