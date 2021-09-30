import { Alert, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ALERT } from '../../redux/types/alertTypes';

interface IProps {
  alertBody: string | string[];
}

const Toast = ({ alertBody }: IProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: ALERT, payload: {} });
  };

  return (
    <div>
      <Stack
        spacing={2}
        sx={{
          width: '20%',
          position: 'fixed',
          top: '75px',
          right: '35px',
          zIndex: 50,
        }}
      >
        <Alert onClose={handleClose} sx={{ width: '100%' }} severity="info">
          {typeof alertBody === 'string' ? (
            alertBody
          ) : (
            <ul>
              {alertBody.map((text: any, index: any) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          )}
        </Alert>
      </Stack>
    </div>
  );
};

export default Toast;
