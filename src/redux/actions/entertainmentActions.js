import { LOADING_TRUE } from "../actioanTypes/actionType";

export const LoadingTrue = () => (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
};
