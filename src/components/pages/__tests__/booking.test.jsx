import { initializeTimes, updateTimes } from "../booking";

test("The initializeTimes returns the correct expected value", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test("The updateTimes should return the current state when no action type is provided", () => {
  const currentState = ["10:00", "11:00", "12:00"];
  const action = {};
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});
