import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
// import AppTheme from './theme/AppTheme';
// import MainContent from './components/MainContent';
// import Latest from './components/Latest';
// import Footer from './components/Footer';

import ContactCard from './ContactCard';
import ApplicationsCard from './ApplicationsCard';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Paper } from '@mui/material';
import AppTheme from '../theme/AppTheme';
import { useState } from 'react';
import MultiStepCard from './MultiStepCard';

export default function PageTemplate(props: { disableCustomTheme?: boolean }) {

    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage(value);
      };

    return (
        <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <ResponsiveAppBar />
        <Pagination 
            count={5} 
            shape="rounded"
            onChange={handleChange}
            page={1}/>
        <Paper sx={{ p: 3, width: '100%' }}>
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <MultiStepCard step={page}/>
                <ApplicationsCard />
                <ContactCard />
            </Container>
        </Paper>

    </AppTheme>
    );
}
