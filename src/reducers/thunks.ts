// thunks.ts
import { AppThunk } from '../store';
import { setAlertSuccess, clearAlertSuccess, setAlertDanger, clearAlertDanger } from './siteReducer';

export const showAlertSuccess = (message: string): AppThunk => async dispatch => {
  dispatch(setAlertSuccess(message));
  setTimeout(() => {
    dispatch(clearAlertSuccess());
  }, 3000);
};

export const showAlertDanger = (message: string): AppThunk => async dispatch => {
  dispatch(setAlertDanger(message));
  setTimeout(() => {
    dispatch(clearAlertDanger());
  }, 3000);
};
