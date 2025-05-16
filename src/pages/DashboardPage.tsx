import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import InstallPage from './InstallPage';
import LandingPageCard from './LandingPageCard';

export default function DashboardPage() {
    const value = localStorage.getItem('order-placed') === 'true';
    console.log(value);
    return value ? <InstallPage /> : <LandingPageCard />;
}
