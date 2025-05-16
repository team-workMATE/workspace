import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgressBar from '../components/progress/LinearProgressBar';
import CenteredCardHeader from '../components/card/CenteredCardHeader';
import { Card, CardContent, Collapse, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableRow } from '@mui/material';
import { Fragment, useState } from 'react';

interface Props {
    name: string;
}

function Row(props: Props) {
    const { name } = props;
    const [open, setOpen] = useState(false);
    const [install, setInstall] = useState(false);

    return (
        <Fragment>
            <TableRow>
                <TableCell>
                    <Typography>{name}</Typography>
                </TableCell>
                <TableCell>
                    <Button onClick={() => setOpen(!open)} disabled={open}>Start Install</Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table sx={{ margin: 1 }}>
                            <TableBody>
                                <LinearProgressBar start={open} onComplete={() => setInstall(false)} />
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

export default function InstallPage() {

    const clear = () => {
        localStorage.setItem('order-placed', 'false');
    }

    return (
        <Card>
            <CenteredCardHeader title='Installation Items' />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <Row name={'Intellij Community Edition'} />
                            <Row name={'Java Developer Kit'} />
                            <Row name={'Maven'} />
                            <Row name={'Git'} />
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <Button variant='contained' color='primary' onClick={clear}>Clear Installation</Button>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}