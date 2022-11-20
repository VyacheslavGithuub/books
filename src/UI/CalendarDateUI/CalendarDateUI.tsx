import React from "react";

interface ICalendarDateProsp {
  data: string;
}
const CalendarDateUI = ({ data }: ICalendarDateProsp) => {
  const monthString = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const CalendarDate = new Date(data);
  const year = CalendarDate.getFullYear() + "г.";
  const month = CalendarDate.getMonth();
  const day = CalendarDate.getDay();

  const convertMonth = monthString[month];

  return (
    <>
      {day} {convertMonth} {year}
    </>
  );
};

export default CalendarDateUI;
