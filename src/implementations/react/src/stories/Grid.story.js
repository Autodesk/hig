import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import Grid from "../adapters/FormElements/GridAdapter";
import GridItem from "../elements/components/FormElements/GridItem";

const style = {
  backgroundColor: "#FF5500",
  minHeight: 50,
	marginBottom: 10,
	color: "#fff"
};

storiesOf("Grid", module)
	.addWithInfo("Grid", "", () => {
		return (
			<div>
				<Grid>
          <GridItem fraction="one-whole">
            <div style={style}>one-whole</div>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem fraction="one-half">
            <div style={style}>one-half</div>
          </GridItem>
          <GridItem fraction="one-half">
            <div style={style}>one-half</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="one-quarter">
            <div style={style}>one-quarter</div>
          </GridItem>
          <GridItem fraction="one-quarter">
            <div style={style}>one-quarter</div>
          </GridItem>
          <GridItem fraction="one-quarter">
            <div style={style}>one-quarter</div>
          </GridItem>
          <GridItem fraction="one-quarter">
            <div style={style}>one-quarter</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
          <GridItem fraction="one-eighth">
            <div style={style}>one-eighth</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
          <GridItem fraction="eleven-twelfths">
            <div style={style}>eleven-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="two-twelfths">
            <div style={style}>two-twelfths</div>
          </GridItem>
          <GridItem fraction="ten-twelfths">
            <div style={style}>ten-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="three-twelfths">
            <div style={style}>three-twelfths</div>
          </GridItem>
          <GridItem fraction="nine-twelfths">
            <div style={style}>nine-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="four-twelfths">
            <div style={style}>four-twelfths</div>
          </GridItem>
          <GridItem fraction="eight-twelfths">
            <div style={style}>eight-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="five-twelfths">
            <div style={style}>five-twelfths</div>
          </GridItem>
          <GridItem fraction="seven-twelfths">
            <div style={style}>seven-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="six-twelfths">
            <div style={style}>six-twelfths</div>
          </GridItem>
          <GridItem fraction="six-twelfths">
            <div style={style}>six-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="seven-twelfths">
            <div style={style}>seven-twelfths</div>
          </GridItem>
          <GridItem fraction="five-twelfths">
            <div style={style}>five-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="eight-twelfths">
            <div style={style}>eight-twelfths</div>
          </GridItem>
          <GridItem fraction="four-twelfths">
            <div style={style}>four-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="nine-twelfths">
            <div style={style}>nine-twelfths</div>
          </GridItem>
          <GridItem fraction="three-twelfths">
            <div style={style}>three-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="ten-twelfths">
            <div style={style}>ten-twelfths</div>
          </GridItem>
          <GridItem fraction="two-twelfths">
            <div style={style}>two-twelfths</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="eleven-twelfths">
            <div style={style}>eleven-twelfths</div>
          </GridItem>
          <GridItem fraction="one-twelfth">
            <div style={style}>one-twelfth</div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem fraction="one-whole">
            <div style={style}>one-whole</div>
          </GridItem>
        </Grid>
			</div>	
		)
	})