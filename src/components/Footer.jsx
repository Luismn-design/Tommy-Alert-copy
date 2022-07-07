import { Typography } from '@mui/material';
import * as React from 'react';
import { Box, Container } from '@mui/system';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
    return (
        <div>
            <Container maxWidth="100%" sx={{
                minHeight: '20vh',
                bgcolor:"#0D47A1",
                color:'white', 
                bottom:'0', 
                left:'0',
                right:'0'}}>
                <Typography variant='h5'>Para mayor informacion</Typography>
                <Typography variant='body1'>Puedes visitar la pagina de la universidad</Typography>
                <Typography variant='body1'>Tambien tienes otras alternativas para comunicarte</Typography>
                <Box sx={{display:'flex',}}>
                    <AndroidIcon sx={{ fontSize: '2rem' }}/>
                    <Typography variant='body1' fontSize={'1.3rem'} marginLeft='5px'>Adroid</Typography>
                </Box>
                <Box sx={{display:'flex',}}>
                    <PhoneIphoneIcon sx={{ fontSize: '2rem' }}/>
                    <Typography variant='body1' fontSize={'1.3rem'} marginLeft='5px'>IOS</Typography>
                </Box>
                <Box sx={{display:'flex',}}>
                    <WhatsAppIcon sx={{ fontSize: '2rem' }}/>
                    <Typography variant='body1' fontSize={'1.3rem'} marginLeft='5px'>Whatsapp</Typography>
                </Box>
                <Box sx={{display:'flex',}}>
                    <EmailIcon sx={{ fontSize: '2rem' }}/>
                    <Typography variant='body1' fontSize={'1.3rem'} marginLeft='5px'>Mail</Typography>
                </Box>
                <Container maxWidth="100%" sx={{
                    justifyContent: 'center',
                    display:'flex',
                    flexDirection:'row',
                    marginTop:'1rem',
                    bgcolor:"#104598",
                    color:'white',  
                    left:'0'}}>
                    <CopyrightIcon sx={{fontSize:'1.2rem'}}/>
                    <Typography variant='body2' marginLeft={'0.2rem'}>Tommy-Alert 2022</Typography>
                </Container>
            </Container>
        </div>
    )
};

export default Footer;
