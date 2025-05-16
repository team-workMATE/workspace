import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ContactCard from './ContactCard';
import ApplicationsCard from './ApplicationsCard';
import EmployeesPage from './EmployeesPage';
import CustomizedSteppers from './CustomizedSteppers';




export default function LandingPageCard() {

    return (
        <Paper sx={{ p: 3, width: '100%' }}>
                <Container
                    maxWidth="lg"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
                >
                    <Typography>Hello, this is the landing page for laptop set up</Typography>
                </Container>
            </Paper>
    );
}