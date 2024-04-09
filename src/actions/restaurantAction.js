import ActionTypes from "../redux/actionTypes";
import api from "../utils/api";
//restoran verilerini alıp store'a aktaran asenkron aksiyon
export const getRestaurants = (restId) => (dispatch) => {
  dispatch({
    type: ActionTypes.REST_LOADING,
  });

  // param olarak id alırsak 1 restoranı almazsak bütün restoranlara istek atıyoruz
  const url = restId ? `/restaurants/${restId}` : "/restaurants";

  api
    .get(url)
    .then((res) =>
      dispatch({
        type: ActionTypes.REST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.REST_ERROR,
        payload: err.message,
      })
    );
};
