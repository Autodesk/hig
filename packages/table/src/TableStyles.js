import React from "react";
import styled from "@emotion/styled";

export const Styles = styled.div`
    padding: 1rem;
    ${'' /* table fill all available space in its containing element */}
    display: block;
    ${'' /* horizontaly scrollable table overflow */}
    overflow: auto;

    .table {
        border-spacing: 0;

        .thead {
            ${'' /* scrollable body to align with the header properly */}
            overflow-y: auto;
            overflow-x: hidden;
        }

        .tbody {
            ${'' /* scrollable table body */}
            overflow-y: scroll;
            overflow-x: hidden;
            height: 250px;
        }

        .tr {
            width: 100%;
            :last-child {
                .td {
                    border-bottom: 0;
                }
            }
        }

        .th,
        .td {
            margin: 0;
            padding: 0.5rem;

            ${'' /* required,using absolutely position resizer, */}
            position: relative;

            :last-child {
                border-right: 0;
            }

            .resizer {
                right: 0;
                background: blue;
                width: 1px;
                height: 100%;
                position: absolute;
                top: 0;
                z-index: 1;
                ${'' /* mobile, prevents from scrolling while dragging */}
                touch-action :none;

                &.isResizing {
                    background: red;
                }
            }
        }
    }
`
