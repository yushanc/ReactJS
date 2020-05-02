import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETED_STREAM
} from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // const mapKey = action.payload.map(arr => {
      //   const container = { [arr.id]: { arr } };
      //   return container;
      // });
      const mapById = action.payload.reduce((result, item) => ({
        ...result, [item.id]: item
      }), {})

      return { ...state, ...mapById };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETED_STREAM: // need to use _.omit function from lodash library
      return _.omit(state, action.payload);

    default:
      return state;
  }
}