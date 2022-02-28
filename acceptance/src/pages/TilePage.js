import React from 'react';
import Tile from '@hig/tile';
import Spacer from '@hig/spacer';

import ImageHolder from '../fixtures/tile/ImageHolder';
import ThemeRepeater from '../components/ThemeRepeater';

function TilePage() {
  const orientation = "vertical";
  const backgroundColor = "blue";
  const version = "V1";
  const identifier = "pdf"; // should take icon
  const statusIcons = ['icon1', 'icon2', 'icon3']; // array of icons
  const actionIcons = [{icon: 'actionIcon1', action: ''}, {icon: 'actionIcon2', action: ''}, {icon: 'actionIcon3', action: ''}];
  const notification = {type: 'pill', component: ''};
  const tooltip = 'click here';
  const overflowMenu = 'SN';
  const cta = 'click here';
  const ctaType = 'button';
  const actionClarifier = 'click on clarififier';
  const checkbox = true;
  const showCheckbox = false;
  const pinIcon = true;
  const showPin = false;
  return (
    <ThemeRepeater>{() => (
      <div>
        <Tile 
          title="Hig Tile"
          type="flat"
          headerContainer={ImageHolder}
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin}
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          type="outline"
          headerContainer={ImageHolder}
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin} 
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          type="solid"
          headerContainer={ImageHolder}
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle" 
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin}
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled type="flat"
          headerContainer={ImageHolder} 
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin}
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled
          type="outline"
          headerContainer={ImageHolder} 
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin}
        />
        <Spacer spacing="l" />
        <Tile
          title="Hig Tile"
          disabled
          type="solid"
          headerContainer={ImageHolder}
          backgroundColor={backgroundColor}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusIcons={statusIcons}
          actionIcons={actionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          ctaType={ctaType}
          actionClarifier={actionClarifier}
          checkbox={checkbox}
          showCheckbox={showCheckbox}
          pinIcon={pinIcon}
          showPin={showPin}
        />
      </div>
    )}</ThemeRepeater>
  );
}

export default TilePage;
