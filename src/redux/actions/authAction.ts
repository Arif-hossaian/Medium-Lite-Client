import { Dispatch } from 'redux';
import { postAPI } from '../../utils/FetchData';
import { IUserLogin } from '../../utils/Typscript';
import { ALERT, IAlertType } from '../types/alertTypes';
import { AUTH, IAuthType } from '../types/authTypes';

export const login =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({
        type: ALERT,
        payload: {
          loading: true,
        },
      });
      const res = await postAPI('login', userLogin);
      //console.log(res);
      dispatch({
        type: AUTH,
        payload: {
          token: res.data.access_token,
          user: res.data.user,
        },
      });
      dispatch({
        type: ALERT,
        payload: {
          success: "Login success 😀",
        },
      });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: {
          errors: error.response.data.msg,
        },
      });
    }
  };
