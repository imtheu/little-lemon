// MOCKED API
const availableTimesByDate = (() => {
  const today = new Date();
  const obj = {};
  const times1 = ["10:00", "11:00", "12:00"];
  const times2 = ["14:00", "15:00", "16:00"];

  for (let i = 0; i <= 10; i++) {
    const futureDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i
    );
    const dateKey = futureDate.toISOString().split("T")[0];
    obj[dateKey] = i % 2 === 0 ? times1 : times2;
  }

  return obj;
})();

const fetchAPI = (date) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
