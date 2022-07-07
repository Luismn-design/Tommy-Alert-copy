import * as React from 'react';
import theme from '../../theme/theme';
// import { deepOrange } from '@mui/material/colors';
import { Avatar} from '@mui/material';


export const LeftTextMessageChatBot = (messageData) => {

    const message = messageData.message ? messageData.message : 'Hola, soy el Chatbot';
    const timestamp = messageData.timestamp ? messageData.timestamp : '';
    const displayName = messageData.displayName ? messageData.displayName : 'Chatbot';


    return (
        <>
            <div style={theme.chatMessageRow}>
                <Avatar 
                    alt={displayName}
                    >
                        T
                    </Avatar>
                    <div>
                        <div style={theme.chatDisplayName}>{displayName}</div>
                        <div style={theme.chatMessageBlue}>
                            <div>
                                <p style={theme.chatMessageContent}>
                                    {message}
                                </p>
                            </div>
                            <div styke={theme.chatMessageTimestampRight}>
                                {timestamp}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export const RightTextMessageChatBot = (messageData) => {
    const message = messageData.message ? messageData.message : 'Hola, Soy el usuario';
    const timestamp = messageData.timestamp ? messageData.timestamp : '';

    return (
        <div style={theme.chatMessageRowRight}>
            <div style={theme.chatMessageOrange}>
                <p style={theme.chatMessageContent}>
                    {message}
                </p>
                <div style={theme.chatMessageTimestampRight}>
                    {timestamp}
                </div>
            </div>
        </div>
    );
};
