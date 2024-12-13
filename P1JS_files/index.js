document.addEventListener("DOMContentLoaded", () => {
  loadRegistration();
});
// reason to put documents in over here, is to getting over from the issues like before intialization.

const inputCon = document.getElementById("inputCon");
const TaskInput = document.getElementById("typeInput");
const showTaskFromLSOpt = document.getElementById("showTaskFromLSOpt");
const myDayLG = document.querySelector("#myDayLG");
const myDayMD = document.querySelector("#myDayMD");
const myDaySM = document.querySelector("#myDaySM");
const importantLG = document.querySelector("#importantLG");
const importantMD = document.querySelector("#importantMD");
const importantSM = document.querySelector("#importantSM");
const myTaskLG = document.querySelector("#myTaskLG");
const myTaskMD = document.querySelector("#myTaskMD");
const myTaskSM = document.querySelector("#myTaskSM");
const importantTaskP = document.querySelector("#importantTask");
const tasksPage = document.querySelector("#tasksPage");
const changeHead = document.querySelector("#changeHead");
const changeImportant = document.querySelector("#changeImportant");
const changeTask = document.querySelector("#changeTask");
const typeImportant = document.querySelector("#typeImportant");
const typeTask = document.querySelector("#typeTask");
const importantTask = document.querySelector("#importantTask");
const openAm = document.getElementById("openAM");
const taskDelete = document.getElementById("deleteTask");
const showDay = document.querySelector(".showDay");
const showImportant = document.querySelector(".showImportant");
const showTask = document.querySelector(".showTask");
const statusHandler = document.getElementById("statusHandler");
const throwError = document.getElementById("throwError");
const search1 = document.getElementById("search1");
const confirmation = document.getElementById("confirmation");
const confirmBtn = document.getElementById("confirm");
const deleteTextContent = document.getElementById("deleteTextContent");

let borderNone = document.querySelector(".border-b-none");

let getShowDay = new Date().toDateString().slice(0, 10);
showDay.innerHTML = `${getShowDay}`;
showImportant.innerHTML = `${getShowDay}`;
showTask.innerHTML = `${getShowDay}`;

let checkbox = document.getElementById("maharaj");
let asideBar = document.querySelector("#asideBar");
let labelAnim = document.querySelector("#labelAnim");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    labelAnim.classList.add("animate__animated", "animate__slideInLeft");
    asideBar.style.display = "block";
    labelAnim.textContent = "⇇";
  } else {
    labelAnim.classList.add("animate__animated", "animate__slideInRight");
    asideBar.style.display = "none";
    labelAnim.textContent = "⇉";
  }
});

TaskInput.addEventListener("input", function (e) {
  e.preventDefault();
  let taskTrim = TaskInput.value.trim();
  if (taskTrim.length !== 0) {
    inputCon.style.borderColor = "yellow";
    borderNone.style.borderColor = "yellow";
  } else {
    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";
  }
});

let appendTask = document.querySelector("#appendTask");

// trying to handle three main section of page
function myDays(days) {
  days.addEventListener("click", (e) => {
    e.preventDefault();
    importantTaskP.style.display = "none";
    tasksPage.style.display = "none";
    appendTask.style.display = "block";
    days.style.color = "#3b82f6";

    importantLG.style.color = "white";
    myTaskLG.style.color = "white";

    importantMD.style.color = "white";
    myTaskMD.style.color = "white";

    importantSM.style.color = "white";
    myTaskSM.style.color = "white";

    days.style.backgroundColor = "#1f2937";
    importantSM.style.backgroundColor = "#374151";
    myTaskSM.style.backgroundColor = "#374151";

    changeHead.style.display = "block";
    changeImportant.style.display = "none";
    changeTask.style.display = "none";

    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";

    TaskInput.setAttribute("placeholder", "Add a Task");
    TaskInput.addEventListener("input", function (e) {
      e.preventDefault();
      let taskTrim = TaskInput.value.trim();
      if (taskTrim.length !== 0) {
        inputCon.style.borderColor = "yellow";
        borderNone.style.borderColor = "yellow";
      } else {
        inputCon.style.borderColor = "#3b82f6";
        borderNone.style.borderColor = "#3b82f6";
      }
    });

    typeImportant.style.display = "none";
    typeTask.style.display = "none";
    TaskInput.style.display = "block";

    openAm.style.display = "none";
  });
}

function importants(impor) {
  impor.addEventListener("click", (e) => {
    e.preventDefault();

    importantTaskP.style.display = "block";
    appendTask.style.display = "none";
    tasksPage.style.display = "none";
    impor.style.color = "#3b82f6";

    myDayLG.style.color = "white";
    myTaskLG.style.color = "white";

    myDayMD.style.color = "white";
    myTaskMD.style.color = "white";

    myDaySM.style.color = "white";
    myTaskSM.style.color = "white";

    impor.style.backgroundColor = "#1f2937";
    myDaySM.style.backgroundColor = "#374151";
    myTaskSM.style.backgroundColor = "#374151";

    changeImportant.style.display = "block";
    changeHead.style.display = "none";
    changeTask.style.display = "none";

    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";

    typeImportant.style.display = "block";
    typeTask.style.display = "none";
    TaskInput.style.display = "none";

    openAm.style.display = "none";

    typeImportant.addEventListener("input", function (e) {
      e.preventDefault();
      let trimImportant = typeImportant.value.trim();
      if (trimImportant.length !== 0) {
        inputCon.style.borderColor = "#ea580c";
        borderNone.style.borderColor = "#ea580c";
      } else {
        inputCon.style.borderColor = "#3b82f6";
        borderNone.style.borderColor = "#3b82f6";
      }
    });
  });
}

function myTasks(tasks) {
  tasks.addEventListener("click", function (e) {
    e.preventDefault();
    tasksPage.style.display = "block";
    appendTask.style.display = "none";
    importantTaskP.style.display = "none";
    tasks.style.color = "#3b82f6";

    myDayLG.style.color = "white";
    importantLG.style.color = "white";

    myDayMD.style.color = "white";
    importantMD.style.color = "white";

    myDaySM.style.color = "white";
    importantSM.style.color = "white";

    tasks.style.backgroundColor = "#1f2937";
    myDaySM.style.backgroundColor = "#374151";
    importantSM.style.backgroundColor = "#374151";

    changeHead.style.display = "none";
    changeImportant.style.display = "none";
    changeTask.style.display = "block";
    openAm.style.display = "none";

    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";

    TaskInput.setAttribute("placeholder", "Add a Task");
    TaskInput.addEventListener("input", function (e) {
      e.preventDefault();
      let taskTrim = TaskInput.value.trim();
      if (taskTrim.length !== 0) {
        inputCon.style.borderColor = "yellow";
        borderNone.style.borderColor = "yellow";
      } else {
        inputCon.style.borderColor = "#3b82f6";
        borderNone.style.borderColor = "#3b82f6";
      }
    });

    typeImportant.style.display = "none";
    TaskInput.style.display = "none";
    typeTask.style.display = "block";
  });
}

myDays(myDayLG), importants(importantLG), myTasks(myTaskLG);
myDays(myDayMD), importants(importantMD), myTasks(myTaskMD);
myDays(myDaySM), importants(importantSM), myTasks(myTaskSM);

const noTaskInMyDay = document.querySelector("#noTaskInMyDay");
const noTaskImportant = document.querySelector("#noTaskImportant");
const noAnyTask = document.querySelector("#noAnyTask");

function hideBar(bar) {
  bar.addEventListener("click", function (e) {
    e.preventDefault();
    asideBar.style.display = "none";
    labelAnim.textContent = "⇉";
  });
}

function showAm(event, task) {
  const top = event.clientY;
  const left = event.clientX;
  const right = left - 200;
  openAm.style.top = `${top}px`;
  openAm.style.left = `${right}px`;
  openAm.style.display = "block";
  taskDelete.onclick = () => showConfirmation(task);
  confirmBtn.addEventListener("click", () => {
    deleteTask(task);
    hideConfirmation();
    handleError("Deleted", "red");
  });
}

function hideAm() {
  openAm.style.display = "none";
}

function showConfirmation(text) {
  deleteTextContent.textContent = `${text}...will deleted`;
  confirmation.style.top = `${235}px`;
  confirmation.classList.remove("hidden");
  hideAm();
}

function hideConfirmation() {
  confirmation.classList.add("hidden");
}

hideBar(myDaySM), hideBar(importantSM), hideBar(myTaskSM);

function setTaskToLS(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getTaksFromLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function showTaskFromLS(key, addTaskFunction) {
  const array = getTaksFromLS(key);
  for (let item of array) {
    addTaskFunction(item);
  }
}

function addTaskToLS(key, value) {
  const array = getTaksFromLS(key);
  array.push(value);
  setTaskToLS(key, array);
}
// Creating templates of tasks
function addTask1(task, origin = "Tasks") {
  let div1 = document.createElement("div");
  div1.classList.add(
    "flex",
    "w-[95%]",
    "m-auto",
    "bg-gray-600",
    "hover:bg-[#4b5544]",
    "mt-[.2rem]",
    "rounded",
    "lg:w-[90%]"
  );

  let div2 = document.createElement("div");
  div2.classList.add("text-[1.5rem]", "ml-[1.25rem]");
  div1.append(div2);

  let b3 = document.createElement("b");
  b3.classList.add("text-white", "hover:text-yellow-500");
  b3.textContent = "◯";
  div2.append(b3);
  let div4 = document.createElement("div");
  div4.classList.add("text-white", "w-[85%]", "ml-[.5rem]");
  div2.after(div4);
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  p5.classList.add("text-[1rem]");
  p5.innerHTML = task;
  p6.classList.add("text-[.8rem]", "text-yellow-600");
  p6.textContent = origin;
  div4.append(p5);
  p5.after(p6);
  let div7 = document.createElement("div");
  div7.classList.add("text-white", "block", "text-center", "w-[10%]");
  div4.after(div7);
  let b8 = document.createElement("b");
  b8.classList.add("hover:text-yellow-500", "cursor-pointer");
  b8.textContent = "...";
  b8.addEventListener("click", (e) => showAm(e, task));
  div7.append(b8);
  appendTask.prepend(div1);

  document.querySelector(".myDayCounterSM").textContent = `${
    getTaksFromLS("myDay").length
  }`;
  document.querySelector(".myDayCounterMD").textContent = `${
    getTaksFromLS("myDay").length
  }`;
  document.querySelector(".myDayCounterLG").textContent = `${
    getTaksFromLS("myDay").length
  }`;
}

function addTask2(task, origin = "Important") {
  let div1 = document.createElement("div");
  div1.classList.add(
    "flex",
    "w-[95%]",
    "m-auto",
    "bg-gray-600",
    "hover:bg-[#4b5544]",
    "mt-[.2rem]",
    "rounded",
    "lg:w-[90%]"
  );

  let div2 = document.createElement("div");
  div2.classList.add("text-[1.5rem]", "ml-[1.25rem]");
  div1.append(div2);

  let b3 = document.createElement("b");
  b3.classList.add("text-white", "hover:text-yellow-500");
  b3.textContent = "◯";
  div2.append(b3);
  let div4 = document.createElement("div");
  div4.classList.add("text-white", "w-[85%]", "ml-[.5rem]");
  div2.after(div4);
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  p5.classList.add("text-[1rem]");
  p5.innerHTML = task;
  p6.classList.add("text-[.8rem]", "text-orange-600");
  p6.textContent = origin;
  div4.append(p5);
  p5.after(p6);
  let div7 = document.createElement("div");
  div7.classList.add("text-white", "block", "text-center", "w-[10%]");
  div4.after(div7);
  let b8 = document.createElement("b");
  b8.classList.add("hover:text-yellow-500", "cursor-pointer");
  b8.textContent = "...";
  b8.addEventListener("click", (e) => showAm(e, task));
  div7.append(b8);
  importantTask.prepend(div1);

  document.querySelector(".importantCounterSM").textContent = `${
    getTaksFromLS("importantTasks").length
  }`;
  document.querySelector(".importantCounterMD").textContent = `${
    getTaksFromLS("importantTasks").length
  }`;
  document.querySelector(".importantCounterLG").textContent = `${
    getTaksFromLS("importantTasks").length
  }`;

  hideImportant();
}

function addTask3(task, origin = "Tasks") {
  let div1 = document.createElement("div");
  div1.classList.add(
    "flex",
    "w-[95%]",
    "m-auto",
    "bg-gray-600",
    "hover:bg-[#4b5544]",
    "mt-[.2rem]",
    "rounded",
    "lg:w-[90%]"
  );

  let div2 = document.createElement("div");
  div2.classList.add("text-[1.5rem]", "ml-[1.25rem]");
  div1.append(div2);

  let b3 = document.createElement("b");
  b3.classList.add("text-white", "hover:text-yellow-500");
  b3.textContent = "◯";
  div2.append(b3);
  let div4 = document.createElement("div");
  div4.classList.add("text-white", "w-[85%]", "ml-[.5rem]");
  div2.after(div4);
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  p5.classList.add("text-[1rem]");
  p5.innerHTML = task;
  p6.classList.add("text-[.8rem]", "text-yellow-600");
  p6.textContent = origin;
  div4.append(p5);
  p5.after(p6);
  let div7 = document.createElement("div");
  div7.classList.add("text-white", "block", "text-center", "w-[10%]");
  div4.after(div7);
  let b8 = document.createElement("b");
  b8.classList.add("hover:text-yellow-500", "cursor-pointer");
  b8.textContent = "...";
  b8.addEventListener("click", (e) => showAm(e, task));
  div7.append(b8);
  tasksPage.prepend(div1);

  document.querySelector(".myTaskCounterSM").textContent = `${
    getTaksFromLS("tasks").length
  }`;
  document.querySelector(".myTaskCounterMD").textContent = `${
    getTaksFromLS("tasks").length
  }`;
  document.querySelector(".myTaskCounterLG").textContent = `${
    getTaksFromLS("tasks").length
  }`;
}

TaskInput.addEventListener("change", function (e) {
  e.preventDefault();
  let arrayData = [];
  arrayData = JSON.parse(localStorage.getItem("myDay")) || [];
  let trimInput = TaskInput.value.trim();
  if (trimInput.length !== 0 && !arrayData.includes(trimInput)) {
    addTaskToLS("myDay", TaskInput.value);
    addTask1(TaskInput.value, "My Day");
    addTaskToLS("tasks", TaskInput.value);
    addTask3(TaskInput.value, "My Day");
    TaskInput.value = "";
    hideDay();
    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";
    handleError("+ Added", "yellow");
  }
  if (arrayData.includes(trimInput)) {
    handleError("duplicates not allowed", "red");
    TaskInput.value = "";
    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";
  }
});

typeImportant.addEventListener("change", function (e) {
  e.preventDefault();
  let arrayData_2 = [];
  arrayData_2 = JSON.parse(localStorage.getItem("importantTasks")) || [];
  let trimImportant = typeImportant.value.trim();
  if (trimImportant.length !== 0 && !arrayData_2.includes(trimImportant)) {
    addTaskToLS("importantTasks", typeImportant.value);
    addTask2(typeImportant.value, "Important");
    addTaskToLS("tasks", typeImportant.value);
    addTask3(typeImportant.value, "Important");
    typeImportant.value = "";
    hideImportant();
    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";
    handleError("+ Added", "yellow");
  }
  if (arrayData_2.includes(trimImportant)) {
    handleError("duplicates not allowed", "red");
    typeImportant.value = "";
    inputCon.style.borderColor = "#3b82f6";
    borderNone.style.borderColor = "#3b82f6";
  }
});

typeTask.addEventListener("change", function (e) {
  e.preventDefault();
  let arrayData_3 = [];
  arrayData_3 = JSON.parse(localStorage.getItem("tasks")) || [];
  let trimTask = typeTask.value.trim();
  if (!trimTask == 0 && !arrayData_3.includes(trimTask)) {
    addTaskToLS("tasks", typeTask.value);
    addTask3(typeTask.value, "Tasks");
    typeTask.value = "";
    hidetask();
    handleError("+ Added", "yellow");
  }
  if (arrayData_3.includes(trimTask)) {
    handleError("duplicates not allowed", "red");
    typeTask.value = "";
  }
});

showTaskFromLS("myDay", (task) => addTask1(task, "My Day"));
showTaskFromLS("importantTasks", (task) => addTask2(task, "Important"));
showTaskFromLS("tasks", (task) => addTask3(task, "Tasks"));

function confirmDeleteTask(task) {
  deleteTask(task);
}

function deleteTask(task) {
  let keys = ["myDay", "importantTasks", "tasks"];
  keys.forEach((key) => {
    let array = getTaksFromLS(key);
    array = array.filter((item) => item !== task);
    setTaskToLS(key, array);
  });
  hideAm();
  updateUI();
}

function updateUI() {
  appendTask.innerHTML = "";
  importantTask.innerHTML = "";
  tasksPage.innerHTML = "";

  showTaskFromLS("myDay", (task) => addTask1(task, "My Day"));
  showTaskFromLS("importantTasks", (task) => addTask2(task, "Important"));
  showTaskFromLS("tasks", (task) => addTask3(task, "Tasks"));
}

let myDay = getTaksFromLS("myDay").length;
let impor = getTaksFromLS("importantTasks").length;
let tasks = getTaksFromLS("tasks").length;

if (myDay !== 0) {
  noTaskInMyDay.style.display = "none";
  noAnyTask.style.display = "none";
}

if (impor !== 0) {
  noTaskImportant.style.display = "none";
  noAnyTask.style.display = "none";
}

if (tasks !== 0) {
  noAnyTask.style.display = "none";
}

function hideDay() {
  noTaskInMyDay.style.display = "none";
  noAnyTask.style.display = "none";
}
function hideImportant() {
  noTaskImportant.style.display = "none";
  noAnyTask.style.display = "none";
}
function hidetask() {
  noAnyTask.style.display = "none";
}

const showName = document.querySelector(".showName");
const showGood = document.querySelector(".showGood");
const goodImg = document.querySelector("#goodImg");
const showThought = document.querySelector(".showThought");
const getHours = new Date().getHours();
function handleTiming(name) {
  const getHours = new Date().getHours(); // Get the current hour

  if (getHours >= 0 && getHours <= 5) {
    showGood.textContent = "Good Night";
    showName.textContent = `${name}`;
  } else if (getHours > 5 && getHours <= 12) {
    goodImg.setAttribute("src", "/P1img/morning_17917995.png");
    showGood.textContent = "Good Morning";
    showName.textContent = `${name}`;
  } else if (getHours > 12 && getHours <= 17) {
    goodImg.setAttribute("scr", "/P1img/afterNoon.png");
    showGood.textContent = "Good Afternoon";
    showName.textContent = `${name}`;
  } else {
    showGood.textContent = "Good Evening";
    showName.textContent = `${name}`;
  }
}

handleTiming("Vinod Manjhi");

function handleError(message, color) {
  statusHandler.style.display = "block";
  statusHandler.style.color = `${color}`;
  throwError.textContent = `${message}`;
  setTimeout(() => {
    statusHandler.style.display = "none";
  }, 2000);
}

const beforeName = document.getElementById("beforeName");
const afterName = document.getElementById("afterName");
const continueAN = document.getElementById("ContinueAfterName");
const toggle = document.getElementById("toggle");
const avatar = document.getElementById("avatar");

const saveNameToLS = (name) => {
  return localStorage.setItem("user-name", JSON.stringify(name));
};

beforeName.addEventListener("change", () => {
  const trimBeforeName = beforeName.value.trim();
  if (trimBeforeName.length !== 0) {
    saveNameToLS(trimBeforeName);
    toggle.textContent = "Select your avatar";
    beforeName.style.display = "none";

    afterName.textContent = beforeName.value;
    afterName.style.display = "block";
    setTimeout(() => {
      avatar.style.display = "block";
    }, 500);
  }
});
const fitName = () => {
  const setName = document.getElementById("setName");
  console.log(setName);
  setName.textContent = localStorage.getItem("user-name");
  handleTiming(localStorage.getItem("user-name"));
};
fitName();

function saveCheckAndImageToLS(checkId, imageSrc) {
  const getId = [
    "option_1",
    "option_2",
    "option_3",
    "option_4",
    "option_5",
    "option_6",
  ];
  getId.forEach((id) => {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id, id === checkId);
  });
  localStorage.setItem("profileImg", imageSrc);
}

function loadCheckAndImageFromLS() {
  const getId = [
    "option_1",
    "option_2",
    "option_3",
    "option_4",
    "option_5",
    "option_6",
  ];
  getId.forEach((id) => {
    const checkbox = document.getElementById(id);
    const isChecked = localStorage.getItem(id) === "true";
    checkbox.checked = isChecked;
    if (isChecked) {
      document.getElementById("getProfile").src =
        localStorage.getItem("profileImg") || "";
      document.getElementById("gotProfile").src =
        localStorage.getItem("profileImg") || "";
      document.getElementById("smProfile").src =
        localStorage.getItem("profileImg") || "";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const getId = [
    "option_1",
    "option_2",
    "option_3",
    "option_4",
    "option_5",
    "option_6",
  ];
  loadCheckAndImageFromLS();

  getId.forEach((id) => {
    const checkbox = document.getElementById(id);

    const for_1 = document.querySelector("#for_1");
    const for_2 = document.querySelector("#for_2");
    const for_3 = document.querySelector("#for_3");
    const for_4 = document.querySelector("#for_4");
    const for_5 = document.querySelector("#for_5");
    const for_6 = document.querySelector("#for_6");

    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked) {
        let imageSrc = "";
        if (id === "option_1") {
          imageSrc = "/P1img/profile_1.png";
          for_1.style.backgroundColor = "#1e40af";
          for_2.style.backgroundColor = "#3b82f6";
          for_3.style.backgroundColor = "#3b82f6";
          for_4.style.backgroundColor = "#3b82f6";
          for_5.style.backgroundColor = "#3b82f6";
          for_6.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        } else if (id === "option_2") {
          imageSrc = "/P1img/profile_2.png";
          for_2.style.backgroundColor = "#1e40af";
          for_1.style.backgroundColor = "#3b82f6";
          for_3.style.backgroundColor = "#3b82f6";
          for_4.style.backgroundColor = "#3b82f6";
          for_5.style.backgroundColor = "#3b82f6";
          for_6.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        } else if (id === "option_3") {
          imageSrc = "/P1img/profile_3.png";
          for_3.style.backgroundColor = "#1e40af";
          for_1.style.backgroundColor = "#3b82f6";
          for_2.style.backgroundColor = "#3b82f6";
          for_4.style.backgroundColor = "#3b82f6";
          for_5.style.backgroundColor = "#3b82f6";
          for_6.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        } else if (id === "option_4") {
          imageSrc = "/P1img/profile_4.png";
          for_4.style.backgroundColor = "#1e40af";
          for_1.style.backgroundColor = "#3b82f6";
          for_2.style.backgroundColor = "#3b82f6";
          for_3.style.backgroundColor = "#3b82f6";
          for_5.style.backgroundColor = "#3b82f6";
          for_6.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        } else if (id === "option_5") {
          imageSrc = "/P1img/profile_5.png";
          for_5.style.backgroundColor = "#1e40af";
          for_1.style.backgroundColor = "#3b82f6";
          for_2.style.backgroundColor = "#3b82f6";
          for_3.style.backgroundColor = "#3b82f6";
          for_4.style.backgroundColor = "#3b82f6";
          for_6.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        } else if (id === "option_6") {
          imageSrc = "/P1img/profile_6.png";
          for_6.style.backgroundColor = "#1e40af";
          for_1.style.backgroundColor = "#3b82f6";
          for_2.style.backgroundColor = "#3b82f6";
          for_3.style.backgroundColor = "#3b82f6";
          for_4.style.backgroundColor = "#3b82f6";
          for_5.style.backgroundColor = "#3b82f6";
          continueAN.style.display = "block";
        }
        document.getElementById("getProfile").src = imageSrc;
        document.getElementById("gotProfile").src = imageSrc;
        document.getElementById("smProfile").src = imageSrc;
        saveCheckAndImageToLS(id, imageSrc);
        getId.forEach((otherId) => {
          if (otherId !== id) {
            document.getElementById(otherId).checked = false;
          }
        });
      }
    });
  });
});

const hideSection = document.getElementById("hideSection");
const header = document.getElementById("header");
const addingSection = document.getElementById("addingSection");

continueAN.addEventListener("click", (e) => {
  hideSection.classList.add("animate__slideOutRight", "animate__faster");
  setTimeout(() => {
    hideSection.style.display = "none";
  }, 100);

  setTimeout(() => {
    handleError("Successful registration", "yellow");
  }, 1500);
});

function saveRegistration() {
  localStorage.setItem("user-registered", "true");
  hideSection.style.display = "none";
  appendTask.classList.remove("hidden");
  header.classList.remove("hidden");
  addingSection.classList.remove("hidden");
}

function loadRegistration() {
  const getStatus = localStorage.getItem("user-registered");
  if (getStatus === "true") {
    hideSection.style.display = "none";
    appendTask.classList.remove("hidden");
    header.classList.remove("hidden");
    addingSection.classList.remove("hidden");
  }
}

const registered = document
  .getElementById("registered")
  .addEventListener("click", () => {
    saveRegistration();
  });
