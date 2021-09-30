import { CircularProgress, Stack } from '@mui/material';

const Loading = () => {
  return (
    <div
      className="loading"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: '#0007',
        color: 'white',
        top: 0,
        left: 0,
        zIndex: 99,
      }}
    >
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="success" />
      </Stack>
    </div>
  );
};

export default Loading;
