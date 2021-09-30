import Loading from './Loading';
import { useSelector } from 'react-redux';
import { RootStore } from '../../utils/Typscript';
import Toast from './Toast';

const Alert = () => {
  const { alert } = useSelector((state: RootStore) => state);
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.errors && <Toast alertBody={alert.errors} />}
      {alert.success && <Toast alertBody={alert.success} />}
    </div>
  );
};

export default Alert;
