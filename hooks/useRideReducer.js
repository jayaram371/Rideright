import { useReducer } from "react";

const initialState = {
  status: "idle",   // current ride status
  ride: null,       // current ride details
  history: [],      // past rides
};

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST_RIDE":
      return { ...state, status: "requested", ride: action.payload };

    case "ACCEPT_RIDE":
      return { ...state, status: "accepted" };

    case "COMPLETE_RIDE":
      if (state.ride) {
        return {
          ...state,
          status: "completed",
          history: [...state.history, { ...state.ride, id: Date.now().toString() }],
          ride: null, // reset after completion
        };
      }
      return state;

    default:
      return state;
  }
}

export default function useRideReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}
