export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_USER":
      return (state = payload);

    case "UPDATE-USERDATA":
      return state.map((user) => (user._id === payload._id ? payload : user));

    default:
      return state;
  }
};
