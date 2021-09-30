import { IAlert } from '../../utils/Typscript';

export const ALERT = 'ALERT';

export interface IAlertType {
  type: typeof ALERT;
  payload: IAlert;
}
