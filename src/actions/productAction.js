// Thunk Aksiyonu

import ActionTypes from "../redux/actionTypes";
import api from "../utils/api";

export const getProducts = (restId) => (dispatch) => {
  //reducer'a yüklenmenin başladığını bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });
  //api isteği atılır
  api
    .get(`/products?restaurantId=${restId}`)
    //istek başarılı olursa reducer'a verileri gönderiyoruz
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    //istek başarısız olursa reducar'a hata mesajını gönderiyoruz
    .catch((err) => {
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      });
    });
};
