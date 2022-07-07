import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#0D47A1',
          dark: '#002884',
          contrastText: '#ffffff',
        },
        secondary: {
          light: '#ff7961',
          main: '#42A5F5',
          dark: '#0b7cd9',
          contrastText: 'white',
        },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
      ].join(','),
      fontSize: 14,
      h1: {
          color: '#42A5F5',
      },
    },
    paperChat: {
      position:'fixed',
      bottom:'1rem',
      right:'1rem',
      height:'40vh',
      width:'20vw',
      marginRight:'40px',
      marginBottom:'10px'
    },
    paperDialogChat: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    },
    paperInputChat: {
      margin:'8px',
      height:'14%'
    },
    paperInputChatTextWrapForm: {
      display: "flex",
      margin: "8px",
    },
    paperInputChatTextWrapText: {
      display: "flex",
      margin: "8px",
    },
    paperInputChatTextButton: {
      marginRight:'8px'
    },
    chatMessageRow: {
      display: "flex",
    },
    chatMessageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    chatDisplayName: {
      marginLeft:'20px',
    },

    chatMessageContent: {
      padding: 0,
      margin: 0
    },

    chatMessageTimestampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "10px",
      bottom: "-3px",
      right: "5px"
    },

    chatMessageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#A8DDFD",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
    },

    chatMessageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#f8e896",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },
    
    Link : {
        color: '#42A5F5',
        textDecoration: 'none'
    },
  
  });

export default theme;
