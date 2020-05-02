export default (state = [], action) => {
  switch (action.type) {
    case "FEATCH_USER":
      return [...state, action.payload]
    default:
      return state
  }
}