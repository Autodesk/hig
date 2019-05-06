import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ThemeRepeater from '../../components/MuiThemeRepeater';

const people = [
  { 
    name: "R G",
    style: {width: 64, height: 64}
  },
  {
    name: "G E",
    style: {width: 48, height: 48}
  },
  {
    name: "K G",
    style: {width: 32, height: 32}
  },
  {
    image: "http://placekitten.com/64/64", name: "Place Kitten"
  }
]

let AvatarsPage = () => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ThemeRepeater>
            {() => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>


                {people.map(p => (
                    <div style={{ display: "flex", flexDirection: "row-reverse", marginBottom: "32px", alignItems: "baseline" }}>
                        <div style={{ display: "flex" }}>
                            <Avatar src={p.image} style={p.style}>{p.name}</Avatar>
                        </div>
                    </div>
                ))}
                </div>
            )}  
        </ThemeRepeater>
    </div>
)

export default AvatarsPage;
