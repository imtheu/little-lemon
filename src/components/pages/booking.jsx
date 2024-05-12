import React, { useReducer } from "react";
import BookingForm from "../elements/bookingForm/bookingForm";
import { fetchAPI } from "../../api";

const fetchByDate = (date) => {
  let result;
  try {
    result = fetchAPI(date);
  } catch (err) {
    console.log(err);
  }
  return result;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return fetchByDate(action.payload);
    default:
      return state;
  }
};

export const initializeTimes = async () => {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];
  return fetchByDate(dateKey);
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const onDateChange = (newDate) =>
    dispatch({ type: "CHANGE_DATE", payload: newDate });

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
      />
    </div>
  );
};

export default BookingPage;
