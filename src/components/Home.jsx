import { Typography } from '@mui/material';
import { Container} from '@mui/system';
import * as React from 'react';
import Box from '@mui/material/Box';
import AndroidIcon from '@mui/icons-material/Android';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';


const HomePage = () => {


    return(
        <Container>
            <Container sx={{textAlign: 'center', mx:'auto', my:'2rem'}}>
                <Typography variant='h1' gutterBottom>Bienvenidos a Tommy-Alert</Typography>
                <Typography variant='h5' gutterBottom>Un producto capaz de facilitar y simplificar la comunicación entre la universidad y el alumno</Typography>
            </Container>

            <Container sx={{ display:'flex', justifyContent: 'space-evenly'}}>
                <Box sx={{textAlign:'center'}}>
                    <AndroidIcon className='homeIcons' sx={{fontSize:'6rem', color:'#42A5F5'}} />
                    <Typography variant='h5'>Chatbot</Typography>
                    <Typography variant='body1'>Chatear con nuestro bot ahora</Typography>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <NotificationsIcon className='homeIcons' sx={{fontSize:'6rem', color:'#42A5F5'}} />
                    <Typography variant='h5'>Sistema de notificaciones</Typography>
                    <Typography variant='body1'>Implementamos un sistema de notificaciones vía mail para que no te pierdas ningún examen, parcial o clase</Typography>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <PersonIcon className='homeIcons' sx={{fontSize:'6rem', color:'#42A5F5'}} />
                    <Typography variant='h5'>Nosotros</Typography>
                    <Typography variant='body1'>Quiénes somos</Typography>
                </Box>
            </Container>
        </Container>    
    )
    
};

export default HomePage;
