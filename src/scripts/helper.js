import { csvParse } from "d3-dsv";

export const timeConverter = t => {
  let a = new Date(t * 1000);
  let today = new Date();
  let yesterday = new Date(Date.now() - 86400000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  if (a.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0))
    return "today, " + hour + ":" + min;
  else if (a.setHours(0, 0, 0, 0) === yesterday.setHours(0, 0, 0, 0))
    return "yesterday, " + hour + ":" + min;
  else if (year === today.getFullYear())
    return date + " " + month + ", " + hour + ":" + min;
  else return date + " " + month + " " + year + ", " + hour + ":" + min;
};

export const largestNum = arr => {
  let currentLongest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > currentLongest) {
      currentLongest = arr[i];
    }
  }

  return currentLongest;
};

export const indexOfMax = arr => {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
};

export const prefersMode = modes => {
  let mode;
  switch (indexOfMax(modes)) {
    case 0:
      mode = `Solo then ${
        indexOfMax(modes.splice(0, 1)) === 1 ? "Duo" : "Squad"
      }`;
      break;
    case 1:
      mode = `Duo then ${
        indexOfMax(modes.splice(1, 1)) === 0 ? "Solo" : "Squad"
      }`;
      break;
    case 2:
      console.log(indexOfMax(modes.splice(2, 1)));
      mode = `Squad then ${
        indexOfMax(modes.splice(2, 1)) === 0 ? "Solo" : "Duo"
      }`;
      break;
    default:
      mode = "Solo";
  }

  return mode;
};

export const fetchCsv = url =>
  fetch(url)
    .then(response =>
      response.ok ? response.text() : Promise.reject(response.status)
    )
    .then(text => csvParse(text));

export const decodeHTML = html => {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
