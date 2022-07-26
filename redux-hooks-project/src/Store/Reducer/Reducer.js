import {
  ADD_CLOTHE,
  GET_CLOTH,
  UPDATE_CLOTH,
  DELETE_CLOTH,

} from "../actions/types";
const initialState = [];
function Reducer(clothes = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CLOTHE:
      return [...clothes, payload];
    case GET_CLOTH:
      return payload;
    case UPDATE_CLOTH:
      return clothes.map((cloth) => {
        if (cloth.id === payload.id) {
          return {
            ...cloth,
            ...payload,
          };
        } else {
          return cloth;
        }
      });
    case DELETE_CLOTH:
      return clothes.filter(({ id }) => id !== payload.id);

    default:
      return clothes;
  }
}
export default Reducer;
