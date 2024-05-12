import React, { useState } from "react";

import style from "./bookingForm.module.css";
import Button from "../button/button";
import { useEffect } from "react";

const BookingForm = ({ availableTimes, onDateChange }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    availableTimes.then((res) => setAvailable(res));
  }, [availableTimes]);

  return (
    <form className={style.bookingForm}>
      <h1>Book Now</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        value={date}
        onChange={({ target }) => {
          setDate(target.value);
          onDateChange(target.value);
        }}
        type="date"
        id="res-date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        value={time}
        onChange={({ target }) => setTime(target.value)}
        id="res-time"
      >
        {available.length > 0
          ? available.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))
          : null}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        value={guests}
        onChange={({ target }) => setGuests(target.value)}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        value={occasion}
        onChange={({ target }) => setOccasion(target.value)}
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <Button type="submit">Make your reservation</Button>
    </form>
  );
};

export default BookingForm;
