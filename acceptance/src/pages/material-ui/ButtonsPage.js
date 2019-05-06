import React from 'react';
import Button from '@material-ui/core/Button';
import ThemeRepeater from "../../components/MuiThemeRepeater";

let ButtonsPage = ({ classes }) => (
    <ThemeRepeater>
      {() => (
        <div>
          <Button>Learn React</Button><br/><br/>
          <Button variant="outlined">Learn React</Button><br/><br/>
          <Button variant="contained">Learn React</Button><br/><br/>
          
          <Button disabled>Learn React</Button><br/><br/>
          <Button variant="outlined" disabled>Learn React</Button><br/><br/>
          <Button variant="contained" disabled>Learn React</Button><br/><br/>
        </div>
      )}
    </ThemeRepeater>
  );

export default ButtonsPage;
