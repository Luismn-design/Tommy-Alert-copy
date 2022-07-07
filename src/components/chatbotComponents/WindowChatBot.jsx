import * as React from 'react';
import theme from '../../theme/theme';
import TextInputChatBot from './TextInputChatBot';
import {Paper} from '@mui/material';
import { LeftTextMessageChatBot, RightTextMessageChatBot } from './TextMessageChatBot';


const WindowChatBot = () => {
    return (
        <Paper style={theme.paperChat} zDepth={2}>
            <Paper id='dialogChat' style={theme.paperDialogChat}>
                <LeftTextMessageChatBot />
                <RightTextMessageChatBot />
            </Paper>
            <TextInputChatBot />
        </Paper>
    );
};


export default WindowChatBot;
