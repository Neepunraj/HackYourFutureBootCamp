console.log("**************");
/* Total Spent Time Percentage part 3 */
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function getTotalSecond(days, hours, minutes) {
  return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60; // to avoid divisible by zero converted into sec
}

function getAverage(totalSecondsSpent) {
  const averageLifeSpan =
    80 *
    365 *
    86400; /* average life span to be 80 years and conveted into sec, in a day there 86400 sec */
  return (totalSecondsSpent * 100) / averageLifeSpan;
}

function getseriesDurations() {
  let percentageTotal = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const { title, days, minutes, hours } = seriesDurations[i]; //destructured days,min,hours
    const totalSecondsSpent = getTotalSecond(days, hours, minutes); //function calling funtion
    const average = parseFloat(getAverage(totalSecondsSpent).toFixed(4)); //tofixed gives string and pharsing it to float
    percentageTotal += average;
    console.log(`i have spent ${average} in ${title}`);
  }
  return `In Total that is  ${percentageTotal.toFixed(3)}% of my life`;
}
console.log(getseriesDurations());

console.log("**************");
/* when we will be there part 2 */
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
  destination: "Copenhagen",
};
function getTimeInHour(speed, distance) {
  return distance / speed; //for 1km it takes 1/50 hours
}
function getHoursAndMinutes(totalTime) {
  const hours = Math.floor(totalTime);
  const minutes = Math.ceil((totalTime - hours) * 60); //ceil meth to round up to the larger integer for time it goes to the largest
  return { hours, minutes };
}
function getTravelingTime(travelinfo) {
  const { speed, destinationDistance, destination } = travelinfo;
  const totalTime = getTimeInHour(speed, destinationDistance); //function calling another function
  const { hours, minutes } = getHoursAndMinutes(totalTime); //desctructured
  return `${hours} hours and  ${minutes} minutes to reach ${destination}`;
}

const travelTime = getTravelingTime(travelInformation);
console.log(travelTime);

console.log("**************");
/* items in array Removal Part 1 */
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
function removeName(name) {
  return names.filter((item) => item !== name);
}
const newNameList = removeName(nameToRemove);
console.log(newNameList);
const nameToRemove2 = "Samuel";
const indexOfNametoBeRemoved = newNameList.indexOf(nameToRemove2);
console.log(indexOfNametoBeRemoved);
if (indexOfNametoBeRemoved >= 0) {
  newNameList.splice(indexOfNametoBeRemoved, 1); // trying also with splice method
}
console.log(newNameList);

console.log("**************");
/* Notes part 4 */
const notes = [];
function saveNote(content, id) {
  notes.push({
    id: id,
    content: content,
  });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Read a new book", 3);
saveNote("Study more", 4);
console.log(notes);

function getNote(id) {
  if (typeof id !== "number" || typeof id === "undefined") {
    console.error("Error Id cannot be undefined and id has to be number");
    return "Error Occured!";
  } else {
    return notes.filter((item) => item.id === id); //used filter MEthod
  }
}
const firstNote = getNote(1);
const secondNote = getNote(2);
console.log(getNote("2"));

console.log(firstNote);
console.log(secondNote);

function logOutNotesFormatted() {
  /* for Each item print id and content */
  notes.forEach((item) => {
    const { id, content } = item;
    console.log(
      `The note with id:${id}, has the following note Text : ${content}`
    );
  });
}
logOutNotesFormatted();

console.log("**************");
/* Activity cheker and show status part 5 */

const activities = [];
const limit = 100;
function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}
addActivity("23-08-19", "Youtube", 30);
addActivity("23-08-19", "Tiktok", 40);
addActivity("23-08-19", "DuoLingo", 50);

console.log(activities);

function showStatus(activities) {
  if (activities.length == 0 || activities === "undefined") {
    console.error(
      "No Activities Recorded Please Add some activities before calling showStatus"
    );
  } else {
    const totalDuration = activities.reduce(
      (total, item) => total + item.duration,
      0
    ); //using reduce Method to get total sum
    console.log("you have used " + totalDuration + " mintus  for Smart phone");
    if (totalDuration >= limit) {
      console.log(
        "You have use more time and reached limit , You have used  " +
          totalDuration +
          " minutes for today , please take some fresh air"
      );
    }
  }
}
function findLongestActivity(activities) {
  if (activities.length == 0 || activities === "undefined") {
    console.error(
      "No Activities Recorded Please Add some activities before calling showStatus"
    );
  } else {
    let longestActivity = activities[0];
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].duration > longestActivity.duration) {
        longestActivity = activities[i];
      }
    }
    return longestActivity;
  }
}
showStatus(activities);
const { activity, duration } = findLongestActivity(activities);
console.log(
  `You have used Maximum time in ${activity} and you used ${duration} minuts for this activity`
);
