import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}

type Props = {
  open: boolean;
  onClose: () => void;
};

const AlertSnackbar: React.FC<Props> = ({open, onClose}) => {
  const [state, setState] = React.useState<State>({
    open: open,
    vertical: 'top',
    horizontal: 'center',
  });

  return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={onClose}
        message="I love snacks"
      />
  );
};

export default AlertSnackbar;