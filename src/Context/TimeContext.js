import React, { useReducer, createContext, useContext } from "react";

const TimeContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATETIMES":
      if (action.payload) {
        const timesArray = [...state.firstList, ...state.secondList];
        const newTimesArray = timesArray.filter((e) => e !== action.payload);
        localStorage.setItem("newTimes", newTimesArray.toString())
        return newTimesArray
      }
      break;
    case "INITIALIZETIME":
      if (action.payload) {
        const half = Math.ceil(action.payload.length / 2);
        return {
          firstList: action.payload.slice(0, half),
          secondList: action.payload.slice(half),
        };
      }
      break;
    default:
      return state;
  }
};

export function TimeProvider({ children }) {
  const initialTimes = [];
  const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

  return (
    <TimeContext.Provider value={[availableTimes, dispatch]}>
      {children}
    </TimeContext.Provider>
  );
}

export const useTime = () => useContext(TimeContext);
