import { actionTypes } from "../types";

export const getItems = (text) => async (dispatch) => {
  const res = await fetch(
    `https://api.savetime.net/v1/client/suggest/item?q=${text}&brandId=24`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const items = await res.json();

  dispatch({
    type: actionTypes.GET_ITEMS,
    payload: items.categories,
  });
};
