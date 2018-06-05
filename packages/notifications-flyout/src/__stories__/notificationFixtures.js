import React from "react";
import TextLink from "@hig/text-link";
import Timestamp from "@hig/timestamp";

const minutesDate1 = new Date();
const minutesDate2 = new Date();
const minutesDate3 = new Date();
const minutesDate4 = new Date();

const updatedDate1 = minutesDate1.setMinutes(minutesDate1.getMinutes() - 3);
const updatedDate2 = minutesDate2.setHours(minutesDate2.getHours() - 2);
const updatedDate3 = minutesDate2.setHours(minutesDate3.getHours() - 24);
const updatedDate4 = minutesDate4.setMinutes(minutesDate4.getMinutes() - 20);

const sampleNotifications = [
  {
    id: 0,
    unread: true,
    timestamp: <Timestamp timestamp={new Date(updatedDate1).toISOString()} />,
    type: "primary",
    children: (
      <div>
        <p>
          <b>Your subscription expires May 5</b>
        </p>
        <p>
          Maya<br />
          Media & Entertainment Collection<br />
          Product Design Collection<br />
          2 more
        </p>
        <p>
          <TextLink
            link="https://github.com/Autodesk/hig"
            onClick={() => {
              console.log("notifications id 1");
            }}
          >
            Manage renewal
          </TextLink>
        </p>
      </div>
    )
  },
  {
    id: 1,
    unread: true,
    timestamp: <Timestamp timestamp={new Date(updatedDate2).toISOString()} />,
    type: "success",
    children: (
      <div>
        <p>
          <b>Your subscription expires April 20</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          Product Design Collection<br />
        </p>
        <p>
          <TextLink
            link="https://github.com/Autodesk/hig"
            onClick={() => {
              console.log("notifications id 2");
            }}
          >
            Manage renewal
          </TextLink>
        </p>
      </div>
    )
  },
  {
    id: 3,
    unread: true,
    timestamp: <Timestamp timestamp={new Date(updatedDate3).toISOString()} />,
    type: "error",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          HIG<br />
        </p>
        <p>
          <TextLink
            link="https://github.com/Autodesk/hig"
            onClick={() => {
              console.log("notifications id 2");
            }}
          >
            Manage Renewal
          </TextLink>
        </p>
      </div>
    )
  },
  {
    id: 4,
    unread: true,
    timestamp: <Timestamp timestamp={new Date(updatedDate4).toISOString()} />,
    type: "warning",
    children: (
      <div>
        <p>
          <b>Your subscription expires June 15</b>
        </p>
        <p>A new version of Autodesk Revit is available for download.</p>
        <p>
          <TextLink
            link="https://github.com/Autodesk/hig"
            onClick={() => {
              console.log("notifications id 2");
            }}
          >
            Manage renewal
          </TextLink>
        </p>
      </div>
    )
  }
];

export default sampleNotifications;
