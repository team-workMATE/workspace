import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GridContainer from '../components/grid/GridContainer';
import { Button } from '@mui/material';


export default function LandingPageCard() {


    return (
        <Paper sx={{ p: 3, width: '100%' }}>
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <GridContainer centered>
                    <Typography variant='h3'>workMATE: Simplifying Laptop Software Setup  <br /> <br /></Typography>
                    <Typography>

                        Installing software on a new or existing laptop doesn't have to be a hassle.
                        workMATE is a user-friendly tool designed to streamline the software installation process, saving time and eliminating confusion. With just a few clicks,
                        workMATE automatically detects your system configuration and offers a curated list of software programs and development tools and more.
                        Whether you're setting up a personal device or deploying software across multiple laptops,
                        workMATE handles the process with speed and reliability. Its intuitive interface, batch install feature ensure you're always up and running without unnecessary delays.
                        Perfect for beginners, IT admins, and everyone in between.
                        No technical knowledge required—just select, click, and go.</Typography>
                    <br /><br />
                    {/* <Typography>Click the button below to proceed with Software Installation</Typography> */}
                </GridContainer>
                {/* <GridContainer centered>
                    <Button variant="outlined" onClick={() => false}>Setup Laptop</Button>
                </GridContainer> */}
            </Container>
        </Paper>


    );
}