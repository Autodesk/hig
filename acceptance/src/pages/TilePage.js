import React, {useState} from 'react';
import Tile from '@hig/tile';
import Spacer from "@hig/spacer";
import Dropdown from "@hig/dropdown";
import Label from "@hig/label";
import Toggle from "@hig/toggle";

import { Alert16, Complete16, Download16, Edit16, MoreVertical16, Archive16, Alert24, Complete24, Download24, Edit24, MoreVertical24, Archive24 } from "@hig/icons"

import ImageHolder from '../fixtures/tile/ImageHolder';
import ThemeRepeater from '../components/ThemeRepeater';
import "../TilePage.css";

function TilePage() {
  const [orientation, setOrientation] = useState("vertical");
  const [background, setBackground] = useState("solid");
  const [isSelected, setIsSelected] = useState(false);
  const [divider, setDivider] = useState(false);
  // const getDivider = () => "#3C3C3C80";
  const [version, setVersion] = useState(false);
  const getVersion = isMediumDensity => isMediumDensity ? <Complete24 /> : <Complete16 />;
  const [identifier, setIdentifier] = useState(false);
  const getIdentifier = isMediumDensity => isMediumDensity ? <Archive24 /> : <Archive16 />;
  const getStatusAndActionIcons = isMediumDensity => [
    {type: 'status', icon: isMediumDensity ? <Alert24 /> : <Alert16 />}, 
    {type: 'status', icon: isMediumDensity ? <Complete24 /> : <Complete16 />}, 
    {type: 'action', icon: isMediumDensity ? <Edit24 /> : <Edit16 />, action: () => {console.log('testing download')}}, 
    {type: 'action', icon: isMediumDensity ? <Download24 /> : <Download16 />, action: () => {console.log('testing edit')}}
  ];
  const [status, setStatus] = useState(false);
  const getNotification = isMediumDensity => ({type: 'pill', component: isMediumDensity ? <Complete24 /> : <Complete16 />});
  const [notification, setNotification] = useState(false);
  const tooltip = 'click here';
  const getOverflowMenu = isMediumDensity => isMediumDensity ? <MoreVertical24 /> : <MoreVertical16 />; 
  const [overflow, setOverlfow] = useState(false);
  const getCTA = () => ({type: 'button', text: 'click here', action: () => {console.log('testing click')}});
  const [cta, setCTA] = useState(false);
  const getActionClarifier = () => 'CTA';
  const [actionClarifier, setActionClarifier] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [disabled, setDisable] = useState(false);

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
    <div className="tile-wrapper">
      <div className="tile-left-nav">
        <Label variant="top">Orientation</Label>
        <Dropdown
          defaultValue='vertical'
          onChange={(value) => {
            switch(value) {
              case 'vertical':
                setOrientation('vertical');
                break;
              case 'horizontal':
              default:
                setOrientation('horizontal');
                break;
            }
          }}
          options={[
            'vertical',
            'horizontal',
          ]}
        />
        <Label variant="top">Background</Label>
        <Dropdown
          defaultValue='solid'
          onChange={(value) => {
            switch(value) {
              case 'solid':
                setBackground('solid');
                break;
              case 'flat':
              default:
                setBackground('flat');
                break;
            }
          }}
          options={[
            'solid',
            'flat',
          ]}
        />
        <Label variant="top" htmlFor="selected">Selected</Label>
        <div style={{display: 'flex', width: '230px', justifyContent: 'space-between'}}>
          <Label variant="side" htmlFor="selected">Not Selected</Label>
          <Toggle id="selected" onChange={() => setIsSelected(!isSelected)} />
          <Label variant="side" htmlFor="selected">Selected</Label>
        </div>
        <Label variant="top">Divider</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setDivider(true);
                break;
              case 'false':
              default:
                setDivider(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Disabled</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setDisable(true);
                break;
              case 'false':
              default:
                setDisable(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Optional Properties</Label>
        <Spacer spacing="m" />
        <Label variant="top">Version</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setVersion(true);
                break;
              case 'false':
              default:
                setVersion(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Identifier Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setIdentifier(true);
                break;
              case 'false':
              default:
                setIdentifier(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Status Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setStatus(true);
                break;
              case 'false':
              default:
                setStatus(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Notification</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setNotification(true);
                break;
              case 'false':
              default:
                setNotification(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Overflow menu</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setOverlfow(true);
                break;
              case 'false':
              default:
                setOverlfow(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Call to Action</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setCTA(true);
                break;
              case 'false':
              default:
                setCTA(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Action Clarifier</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setActionClarifier(true);
                break;
              case 'false':
              default:
                setActionClarifier(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Spacer spacing="m" />
        <Label variant="top">Show Checkbox</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setShowCheckbox(true);
                break;
              case 'false':
              default:
                setShowCheckbox(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Show Pin Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setShowPin(true);
                break;
              case 'false':
              default:
                setShowPin(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
      </div>
      <ThemeRepeater>{({id, level, theme}) => {
        const isMediumDensity = theme.metadata.densityId === `medium-density`;
        return (
          <>
            <Tile 
              headerContainer={ImageHolder}
              background={background}
              divider={divider}
              title="Tile Title"
              subtitle="Tile SubTitle"
              orientation={orientation}
              version={version ? getVersion(isMediumDensity) : null}
              identifier={identifier ? getIdentifier(isMediumDensity) : null}
              statusAndActionIcons={status ? getStatusAndActionIcons(isMediumDensity) : null}
              notification={notification ? getNotification(isMediumDensity) : null}
              tooltip={tooltip}
              overflowMenu={overflow ? getOverflowMenu(isMediumDensity) : null}
              cta={cta ? getCTA() : null}
              actionClarifier={actionClarifier ? getActionClarifier() : null}
              showCheckbox={showCheckbox}
              showPin={showPin}
              surface={level}
              disabled={disabled}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              onBlur={onBlur}
              selected={isSelected}
            />
          </>
        )
      }}</ThemeRepeater>
    </div>
  );
}

export default TilePage;
