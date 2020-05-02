import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// export const FetchPosts = async () => {
//   return async function (dispatch, getState) {
//     const respondse = await jsonPlaceHolder.get("/posts");
//     dispatch({ type: "FEATCH_POST", payload: respondse })
//   }

// };
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(FetchPosts());
  // const userIDs = _.uniq(_.map(getState().posts, "userId"));
  // userIDs.forEach(id => dispatch(FetchUser(id)));

  // lodash clear code
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(FetchUser(id)))
    .value();
};

export const FetchPosts = () => async dispatch => {
  const respondse = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FEATCH_POSTS", payload: respondse.data })
};

export const FetchUser = (id) => async dispatch => {
  const respondse = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FEATCH_USER", payload: respondse.data });
}


// export const FetchUser = (id) => dispatch => {
//   _FetchUser(id, dispatch);
// }

// const _FetchUser = _.memoize(async (id, dispatch) => {
//   const respondse = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FEATCH_USER", payload: respondse.data });
// })
