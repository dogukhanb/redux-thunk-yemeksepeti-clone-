import ActionTypes from "../redux/actionTypes";
import api from "../utils/api";

export const getRestaurants = (restId) => (dispatch) => {
  dispatch({
    type: ActionTypes.REST_LOADING,
  });

  const url = restId ? `/restaurants/${restId}` : "/restaurants";

  api
    .get(url)
    .then((res) => {
      dispatch({
        type: ActionTypes.REST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      let errorMessage = "Bilinmeyen bir hata oluştu.";

      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }

      dispatch({
        type: ActionTypes.REST_ERROR,
        payload: errorMessage,
      });
    });
};
