import React, { useMemo, useState } from "react";

import style from "./bookingForm.module.css";
import Button from "../button/button";
import { useEffect } from "react";

const BookingForm = ({ availableTimes, onDateChange, onSubmitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [available, setAvailable] = useState([]);

  const invalid = useMemo(
    () => date === "" || time === "" || +guests < 0 || occasion === "",
    [date, time, guests, occasion]
  );

  useEffect(() => {
    availableTimes?.then((res) => setAvailable(res));
  }, [availableTimes]);

  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form className={style.bookingForm} onSubmit={onSubmit}>
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
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        value={time}
        onChange={({ target }) => setTime(target.value)}
        id="res-time"
        required
      >
        <option value="" disabled>
          Choose
        </option>
        {available.length > 0
          ? available.map((availableTime) => (
              <option value={availableTime} key={availableTime}>
                {availableTime}
              </option>
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
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        value={occasion}
        onChange={({ target }) => setOccasion(target.value)}
        id="occasion"
        required
      >
        <option value="" disabled>
          Choose
        </option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <Button disabled={invalid} type="submit">
        Make your reservation
      </Button>
    </form>
  );
};

export default BookingForm;
