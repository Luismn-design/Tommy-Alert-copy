import * as React from 'react';
import WindowChatBot from './WindowChatBot';
import {Fab, Typography} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';


const FloatBotButton = () => {

    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
    };
    function handleClickClose() {
        setOpen(false);
    };


    return (
        <>
            {open ? 
                <WindowChatBot onClick={handleClickClose}  />
                : 
            <Fab color='secondary' variant="extended" size="medium" aria-label="add" onClick={handleClickOpen} style={{position:'fixed', bottom:'1rem', right:'1rem'}}>
                <AdbIcon />
                <Typography variant='body2'>Tommy-Alert</Typography>
            </Fab>
            }
        </>
    );
}


export default FloatBotButton;
