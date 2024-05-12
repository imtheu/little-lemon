import React, { useReducer } from "react";
import BookingForm from "../elements/bookingForm/bookingForm";
import { fetchAPI, submitAPI } from "../../api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const onDateChange = (newDate) =>
    dispatch({ type: "CHANGE_DATE", payload: newDate });

  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);
      if (result) {
        navigate("/confirmed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
