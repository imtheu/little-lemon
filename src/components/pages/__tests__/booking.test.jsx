import { fetchAPI } from "../../../api";
import { initializeTimes, updateTimes } from "../booking";

test("The initializeTimes returns the correct expected value", async () => {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];
  const expectedTimes = await fetchAPI(dateKey);
  const times = await initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test("The updateTimes should return the current state when no action type is provided", () => {
  const currentState = ["10:00", "11:00", "12:00"];
  const action = {};
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});
