import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ContactCard from './ContactCard';
import OrderStepFlow from './OrderStepFlow';
import ApplicationsCard from './ApplicationsCard';
import EmployeesPage from './EmployeesPage';
import CustomizedSteppers from './CustomizedSteppers';
import { PageContainer } from '@toolpad/core';
import LandingPageCard from './LandingPageCard';
import Button from '@mui/material/Button';
import LandingPagePaper from './LandingPagePaper';

export default function DashboardPage() {

    const [page, setPage] = React.useState(1);
    const [onLanding, setLanding] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage(value);
    };


    if (onLanding) return (
        <Box>
            <LandingPageCard />
            <Button variant="outlined" onClick={() => {setLanding(false)}}>Setup Laptop</Button>
        </Box>
    );
    else return <OrderStepFlow />
}
