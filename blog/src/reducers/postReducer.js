export default (state = [], action) => {
  switch (action.type) {
    case "FEATCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};