import React from 'react';
import Tile from '@hig/tile';
import Spacer from '@hig/spacer';

import { Alert16, Complete16, Download16, Edit16, MoreVertical16, Archive16 } from "@hig/icons"

import ImageHolder from '../fixtures/tile/ImageHolder';
import ThemeRepeater from '../components/ThemeRepeater';

function TilePage() {
  const orientation = "vertical";
  const background = "solid" // flat
  const version = <Complete16 />;
  const identifier = <Archive16 />;
  const statusAndActionIcons =[{type: 'status', icon: <Alert16 />}, {type: 'status', icon: <Complete16 />}, {type: 'action', icon: <Download16 />, action: () => {console.log('testing download')}}, {type: 'action', icon: <Edit16 />, action: () => {console.log('testing edit')}}];
  const notification = {type: 'pill', component: <Complete16 />};
  const tooltip = 'click here';
  const overflowMenu = <MoreVertical16 />;
  const cta = {type: 'button', text: 'click here', action: () => {console.log('testing click')}}
  const actionClarifier = 'click on clarifier';
  const showCheckbox = true;
  const showPin = true;
  const level = 300;
  const disabled = false;

  const onKeyDown = () => {
    console.log('from tile page KEYDOWN');
  }

  const onFocus = () => {
    console.log('from tile page FOCUS');
  }

  const onBlur = () => {
    console.log('from tile page BLUR');
  }

  return (
    // <ThemeRepeater>{() => (
    //   <div>
    //     <Tile 
    //       title="Hig Tile"
    //       type="flat"
    //       headerContainer={ImageHolder}
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle"
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin}
    //     />
    //     <Spacer spacing="l" />
    //     <Tile
    //       title="Hig Tile"
    //       type="outline"
    //       headerContainer={ImageHolder}
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle"
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin} 
    //     />
    //     <Spacer spacing="l" />
    //     <Tile
    //       title="Hig Tile"
    //       type="solid"
    //       headerContainer={ImageHolder}
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle" 
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin}
    //     />
    //     <Spacer spacing="l" />
    //     <Tile
    //       title="Hig Tile"
    //       disabled type="flat"
    //       headerContainer={ImageHolder} 
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle"
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin}
    //     />
    //     <Spacer spacing="l" />
    //     <Tile
    //       title="Hig Tile"
    //       disabled
    //       type="outline"
    //       headerContainer={ImageHolder} 
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle"
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin}
    //     />
    //     <Spacer spacing="l" />
    //     <Tile
    //       title="Hig Tile"
    //       disabled
    //       type="solid"
    //       headerContainer={ImageHolder}
    //       background={background}
    //       divider="white"
    //       title="Tile Title"
    //       subtitle="Tile SubTitle"
    //       orientation={orientation}
    //       version={version}
    //       identifier={identifier}
    //       statusAndActionIcons={statusAndActionIcons}
    //       notification={notification}
    //       tooltip={tooltip}
    //       overflowMenu={overflowMenu}
    //       cta={cta}
    //       actionClarifier={actionClarifier}
    //       showCheckbox={showCheckbox}
    //       showPin={showPin}
    //     />
    //   </div>
    // )}</ThemeRepeater>
    <ThemeRepeater>{() => (
      <div>
        <Tile 
          title="Hig Tile"
          type="flat"
          headerContainer={ImageHolder}
          background={background}
          divider="white"
          title="Tile Title"
          subtitle="Tile SubTitle"
          orientation={orientation}
          version={version}
          identifier={identifier}
          statusAndActionIcons={statusAndActionIcons}
          notification={notification}
          tooltip={tooltip}
          overflowMenu={overflowMenu}
          cta={cta}
          actionClarifier={actionClarifier}
          showCheckbox={showCheckbox}
          showPin={showPin}
          surface={level}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        />        
      </div>
    )}</ThemeRepeater>
  );
}

export default TilePage;
