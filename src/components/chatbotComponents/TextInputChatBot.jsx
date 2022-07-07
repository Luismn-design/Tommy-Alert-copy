import * as React from 'react';
import theme from '../../theme/theme';
import {TextField, Button, Box} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const TextInputChatBot = () => {
    return (
        < >
        <Box component='form' noValidate autoComplete="off" style={theme.paperInputChatTextWrapForm}>
            <TextField 
                id='inputChat'
                label='Escribe aquí'
                fullWidth
                syle={theme.paperInputChatTextWrapText} 
                />
            <Button variant='contained' color='primary' style={theme.paperInputChatTextButton}>
                <SendIcon />
            </Button>
        </Box>
        </>
    );
};


export default TextInputChatBot;
