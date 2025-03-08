let countNumber = 0;
let getUserName = "";
const toDos = [];
function getNamefromString(text) {
  return text.replace(/Hello my name is/i, "").trim(); /* for case-insensitive*/
}

function getReply(command) {
  let nameFromCommand = "";
  let commandInLowerCase = command.toLowerCase();
  const keyWord1 = "Hello my name is".toLowerCase();
  const keyWord2 = "What is my name".toLowerCase();
  const keyWord3 = "Add".toLowerCase();
  const keyWord4 = "Remove".toLowerCase();
  const keyWord5 = "what is on my todo".toLowerCase();

  if (commandInLowerCase.includes(keyWord1)) {
    nameFromCommand = getNamefromString(command);
    if (getUserName === nameFromCommand && countNumber >= 1) {
      return `Hello Again ${nameFromCommand}`;
    } else {
      getUserName = nameFromCommand;
      countNumber++;
      return `Nice to meet You ${nameFromCommand}`;
    }
  }

  if (commandInLowerCase.includes(keyWord2)) {
    return `Your Name is ${getUserName}`;
  }

  if (commandInLowerCase.includes(keyWord3)) {
    const todoItem = commandInLowerCase
      .replace("add", "")
      .replace("to my todo", "")
      .trim("");
    const getIndex = toDos.indexOf(todoItem);
    if (toDos[getIndex] === todoItem) {
      return `item is already added`;
    } else {
      toDos.push(todoItem);
      return `${todoItem} added to your todo`;
    }
  }
  if (commandInLowerCase.includes(keyWord4)) {
    const todoItem = commandInLowerCase
      .replace("remove", "")
      .replace("from my todo", "")
      .trim("");
    const getIndex = toDos.indexOf(todoItem);
    /*  let toDos= [], and toDos.filter(item=> item !== todoItem) instead of finding index  , can i mutate directly */
    if (getIndex > -1) {
      toDos.splice(getIndex, 1);

      return `${todoItem} is removed from your todo`;
    } else {
      return `${todoItem} is not in the todo list`;
    }
  }
  if (commandInLowerCase.includes(keyWord5)) {
    return toDos.length > 0
      ? `You have ${toDos.length} todos , they are ${toDos.join(",")}`
      : `You dont have any pending todo`;
  }
  if (commandInLowerCase.includes("what day is it")) {
    const todaysDay = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return todaysDay.toLocaleDateString("en-GB", options);
  }
  if (commandInLowerCase.includes("what is ")) {
    const evalExpression = commandInLowerCase
      .replace("what is ", "")
      .replace("?", "");
    try {
      const result = eval(evalExpression);
      return result;
    } catch (error) {
      return "I can't evaluate that command";
    }
  }

  if (commandInLowerCase.includes("set a timer for")) {
    const getTimer = parseInt(
      commandInLowerCase.replace("set a timer for ", "").replace(" minutes", "")
    ); /* in m */
    if (getTimer) {
      setTimeout(() => {
        console.log(`${getTimer} ms `);
        return `${getTimer} ms timer is set and`;
      }, getTimer * 60 * 1000);
    } else {
      return "couldnot Set Time out";
    }
  }
  return "I don't understand that command.";
}

console.log("Voice Assistant");
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Neepun"));
console.log(getReply("Unknown command"));
console.log(
  getReply("Hello my name is Benjamin")
); /* Nice to meet you Benjamin */
console.log(getReply("Hello my name is Neepun"));

console.log(getReply("Add reading to my todo"));
console.log(getReply("Add playing to my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply("Add reading to my todo"));

console.log(getReply("Remove reading from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove reading from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 * 3 ?"));
console.log(
  getReply("Set a timer for 2 minutes")
); /* this will get syn and async return  */
