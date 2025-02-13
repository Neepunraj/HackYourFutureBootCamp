function getEventWeekDay(daysProvided) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const eventDayIndex = (today + daysProvided) % 7;
  return weekDays[eventDayIndex];
}

console.log(`the event will be happening on ${getEventWeekDay(20)}`);
