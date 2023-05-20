import { reducer } from "../Context/TimeContext";
import { fetchAPI } from "../api";
describe("Update and Initialize Times Should Change State", () => {
  test("UPDATETIMES Should Work", () => {
    const state = [];
    const action = {
      type: "INITIALIZETIME",
      payload: fetchAPI(new Date()),
    };
    const intialReturn = reducer(state, action);
    const randomTime = intialReturn.firstList[0];
    const initialLength = [
      ...intialReturn.firstList,
      ...intialReturn.secondList,
    ].length;
    const action2 = {
      type: "UPDATETIMES",
      payload: randomTime,
    };
    const updatedArray = reducer(intialReturn, action2);
    expect(localStorage.getItem("newTimes")).toBe(updatedArray.toString());
    expect(initialLength - 1).toBe(updatedArray.length);
  });

  test("INITIALIZETIME Should Work", () => {
    const state = [];
    const action = {
      type: "INITIALIZETIME",
      payload: fetchAPI(new Date()),
    };
    const reducerReturn = reducer(state, action);
    const reducerValue = Object.values(reducerReturn).toString().split(",");
    expect(Array.isArray(reducerValue) && reducerValue.length > 1).toBe(true);
  });
});
