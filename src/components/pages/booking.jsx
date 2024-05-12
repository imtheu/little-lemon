import React, { useReducer } from "react";
import BookingForm from "../elements/bookingForm/bookingForm";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const onDateChange = (newDate) => {
    dispatch({ type: "CHANGE_DATE", payload: newDate });
  };

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
