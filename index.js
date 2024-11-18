const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();

const day = date.getDate();

const month = date.getMonth() + 1;

const year = date.getFullYear();

const hours = date.getHours();

const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;

console.log(
  currentDateParagraph,
  dateOptionsSelectElement,
  date,
  day,
  month,
  year,
  hours,
  minutes,
  formattedDate
);
