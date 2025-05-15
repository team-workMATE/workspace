import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ContactCard from './ContactCard';
import MultiStepCard from './MultiStepCard';
import ApplicationsCard from './ApplicationsCard';
import EmployeesPage from './EmployeesPage';

export default function DashboardPage() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
      setPage(value);
    };
    
  return (
    // <AppTheme {...props}>
    // <CssBaseline enableColorScheme />
    // <ResponsiveAppBar />
    <Box>
    <Pagination 
        count={5} 
        shape="rounded"
        onChange={handleChange}
        page={page}/>
    <Paper sx={{ p: 3, width: '100%' }}>
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
            <MultiStepCard step={page}/>
            <EmployeesPage />
        </Container>
    </Paper>

    </Box>
);
}
