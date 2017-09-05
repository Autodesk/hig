import React from 'react';
import Typography from '../../adapters/TypographyAdapter'

function H1Component(props) {
    return (<Typography type="h1" text={props.children} />)
}

function H2Component(props) {
    return (<Typography type="h2" text={props.children} />)
}

function H3Component(props) {
    return (<Typography type="h3" text={props.children} />)
}

function Sub1Component(props) {
    return (<Typography type="sub1" text={props.children} />)
}

function Sub2Component(props) {
    return (<Typography type="sub2" text={props.children} />)
}

function BodyComponent(props) {
    return (<Typography type="body" text={props.children} />)
}

function BoldComponent(props) {
    return (<Typography type="bold" text={props.children} />)
}

function DisabledComponent(props) {
    return (<Typography type="disabled" text={props.children} />)
}

function CaptionComponent(props) {
    return (<Typography type="caption" text={props.children} />)
}

export {
  H1Component as H1,
  H2Component as H2,
  H3Component as H3,
  Sub1Component as Sub1,
  Sub2Component as Sub2,
  BodyComponent as Body,
  BoldComponent as Bold,
  DisabledComponent as Disabled,
  CaptionComponent as Caption
}




