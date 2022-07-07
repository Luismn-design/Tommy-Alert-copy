import * as React from 'react';
import { Container} from '@mui/system';
import { Typography, Select, InputLabel, FormControl, MenuItem, Box} from '@mui/material';
import { useState } from 'react';
import { OutlinedInput, Checkbox, TextField, Button } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';

const ExmPage = (props) => {

    moment().locale('es').format('L');

    const [carrera, setCarrera] = useState('');
    const handleChangeCarrera = (event) => {
        setCarrera(event.target.value);
        setExam({...exam, carrera: event.target.value});
    };

    const [materia, setMateria] = useState('');
    const handleChangeMateria = (event) => {
        setMateria(event.target.value);
        setExam({...exam, materia: event.target.value});
    };

    const [comision, setComision] = useState([]);
    const handleChangeComision = (event) => {
        const {
            target: { value },
        } = event;
        setComision(
            typeof value === 'string' ? value.split(',') : value,
        );
        setExam({...exam, comision: value});
    };
    const comisiones = [
        'Comision 1',
        'Comision 2',
        'Comision 3',
        'Comision 4',
        'Comision 5',
    ];

    const [fecha, setFecha] = useState('');
    const handleChangeFecha = (event) => {
        setFecha(event.target.value);
        setExam({...exam, fecha: event.target.value});
    };

    const [exam, setExam] = useState({carrera: '', materia: '', comision: {}, fecha: '', hora: ''});


    

    return (
        <Container>
            <Container id="title" className="container" sx={{justifyConten:'center', mb:'2rem'}}>
                <Typography className="header center blue-text" variant='h1'>Panel de Notificaciones</Typography>
            </Container>

            <Container className="formContainer">
                <Typography className="center" variant='h5'>Elija la carrera a la que desea agregar una fecha de examen</Typography><br/>
                <FormControl className="selectFormContainer" fullWidth>
                    <InputLabel id='carreraSelectLabel'>Carrera</InputLabel>
                    <Select className="selectForm" labelId='carreraSelectLabel' id='carreraSelect' label='Carrera' value={carrera} onChange={handleChangeCarrera}>
                        <MenuItem value="Ingeniera en Informatica">Ingeniera en Informatica</MenuItem>
                        <MenuItem value="Tecnicatura en Dessarrollo y Calidad de Software">Tecnicatura en Dessarrollo y Calidad de Software</MenuItem>
                    </Select>
                </FormControl>
    
                <FormControl className="selectFormContainer" fullWidth>
                    <InputLabel id='materiaSelectLabel'>Materia</InputLabel>
                    <Select className="selectForm" labelId='materiaSelectLabel' id='materiaSelect' label='Materia' value={materia} onChange={handleChangeMateria}>
                        <MenuItem value="Matematica I">Matematica I</MenuItem>
                        <MenuItem value="Fisica I">Fisica I</MenuItem>
                        <MenuItem value="Informatica">Informatica</MenuItem>
                        <MenuItem value="Sistemas de Representacion">Sistemas de Representacion</MenuItem>
                        <MenuItem value="Ingles">Ingles</MenuItem>
                        <MenuItem value="Algoritmos y Paradigmas">Algoritmos y Paradigmas</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="selectFormContainer" fullWidth>
                    <InputLabel id='comisionSelectLabel'>Comision</InputLabel>
                    <Select 
                        multiple 
                        className="selectForm" 
                        labelId='comisionSelectLabel' 
                        id='comisionSelect' 
                        label='Comision' 
                        value={comision} 
                        onChange={handleChangeComision} 
                        input={<OutlinedInput label="Comision" />} 
                        renderValue={(selected) => 
                            (<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>)}>
                                {comisiones.map ((comisionValue) => (
                                    <MenuItem key={comisionValue} value={comisionValue}>
                                        <Checkbox checked={comision.indexOf(comisionValue) > -1} />
                                        <ListItemText primary={comisionValue} />
                                    </MenuItem>
                                ))}
                    </Select>
                </FormControl>

                <FormControl className="selectFormContainer" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <TextField
                            id='fecha'
                            label='Fecha'
                            type='date'
                            value={fecha}
                            onChange={handleChangeFecha}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </LocalizationProvider>
                </FormControl>

                <Container className="buttonContainer">
                    <Button variant="contained" color="primary">Agregar Examen</Button>
                </Container>
                
            </Container>
        </Container>
    )
};

export default ExmPage;
