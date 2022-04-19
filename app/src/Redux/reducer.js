import React from "react";
const initState = {
  data: [],
};
//reducer takes two argument first one is state and second one action
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
