import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import ContactCard from './ContactCard';
import ApplicationsCard from './ApplicationsCard';
import { Paper } from '@mui/material';
import { useState } from 'react';
import OrderStepFlow from './OrderStepFlow';
import CustomizedSteppers from './CustomizedSteppers';

export default function PageTemplate(props: { disableCustomTheme?: boolean }) {

    const [page, setPage] = useState(1);
    setPage(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage(value);
    };

    return (
        <Paper sx={{ p: 3, width: '100%' }}>
            <CssBaseline enableColorScheme />
            <CustomizedSteppers activeStep={page} />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <ApplicationsCard />
                <ContactCard />
            </Container>
        </Paper>
    );
}
