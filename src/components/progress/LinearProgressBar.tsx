import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

type Props = {
    start: boolean;
    onComplete: () => void;
};

const LinearProgressBar: React.FC<Props> = ({ start, onComplete }) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        if (start) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(timer);
                        return 100;
                    }
                    return prevProgress + 10;
                })
            }, 800);
            return () => {
                onComplete();
            };
        }
    }, [start]);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
};

export default LinearProgressBar;