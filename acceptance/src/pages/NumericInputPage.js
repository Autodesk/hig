import React, {Component} from "react";
import NumericInput from "@hig/numeric-input";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import ThemeRepeater from "../components/ThemeRepeater";
import Text from "../components/Text";

const states = [
  { label: "interactive", props: {} },
  { label: "with default value", props: { defaultValue: 10 } },
  { label: "disabled", props: { disabled: true } }
];

const variants = ["line", "box"];


export default class NumericInputPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
        <NumericInput
          variant="box"
          value={this.state.value}
          step={0.3}
          onChange={value => {
            console.log(value);
            // console.log(typeof value);
            this.setState({value})
          }}
        />
      </div>
    );
  }
}

// function NumericInputPage() {
//   return (
//     <ThemeRepeater>
//       {({ id }) => {
//         return (
//           <div>
//             {variants.map(variant => {
//               return (
//                 <div key={variant}>
//                   <Text>{variant}</Text>
//                   {states.map(({ label, props }) => {
//                     const key = id + label + variant;
//                     return (
//                       <div key={key}>
//                         <div style={{}}>
//                           <Label htmlFor={key} disabled={props.disabled}>
//                             {label}
//                           </Label>
//                           <NumericInput id={key} {...props} variant={variant} />
//                           <Spacer spacing="xs" />
//                         </div>
//                         <Spacer />
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         );
//       }}
//     </ThemeRepeater>
//   );
// }

// export default NumericInputPage;
