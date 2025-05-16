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
import LandingPageCard from './LandingPageCard';
import Button from '@mui/material/Button';



const [onLanding, setLanding] = React.useState(true);

export default function LandingPagePaper() {
    
    if (onLanding)
        return (
        <Box>
            <LandingPageCard />
        </Box>
        );
    else {
        return (
            <Box> 
                <Paper sx={{ p: 3, width: '100%' }}>
                    <Container
                    maxWidth="lg"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
                    >
                    </Container>
                 </Paper>
            </Box>
        );
    }
};
