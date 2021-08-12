const getUsername = (input) => {
  return {
    type: "GET_USERNAME",
    payload: input,
  };
};

const getEmail = (input) => {
  return {
    type: "GET_EMAIL",
    payload: input,
  };
};

export { getUsername, getEmail };