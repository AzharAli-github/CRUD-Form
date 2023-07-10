import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {Counter} from '../Counter';
import React, { useState } from 'react';

export const About = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [showParagraph, setShowParagraph] = useState(false);

    const handleClick = () => {
      setShowParagraph(true);
    };

    return(
        <>
        <h1>I am in About Section</h1>
        <Button variant="contained">Hello World</Button><br/>
      <Switch {...label} defaultChecked /> <br/>
      <Stack direction="row" spacing={2} style={{display:'flex', justifyContent: 'center'}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack><br/>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge><br/>
    <Counter/><br/>
    <div>
    <Button onClick={handleClick}>Create Paragraph</Button>
    {showParagraph && <p>This is a new paragraph.</p>}
    </div>
    </>
    );
}