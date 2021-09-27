const NotFound = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', position: 'relative' }}>
      <h2
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
        }}
      >
        404 | NotFound
      </h2>
    </div>
  );
};

export default NotFound;
