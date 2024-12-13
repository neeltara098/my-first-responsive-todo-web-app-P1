const sectionOne = document.querySelector(".sec1");

const createDiv_s = (left, top) => {
  const div = document.createElement("div");
  div.classList.add(
    "absolute",
    "border-black",
    "w-fit",
    "h-fit",
    "overflow-hidden"
  );

  const imgs = document.createElement("img");
  imgs.setAttribute("src", "/P1img/profile_6.png");
  imgs.classList.add('rounded-full');
  div.style.left = `${left}px`;
  div.style.top = `${top}px`;

  setTimeout(() => {
    imgs.classList.add('translate-y-[0%]');
  }, 10); // Adding a small delay to ensure the transition effect

  div.append(imgs);
  sectionOne.append(div);
  setTimeout(() => {
    div.remove();
  }, 400);
};

let lastExecution = 0;
const throttleTime = 100; // 100ms throttle

sectionOne.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastExecution >= throttleTime) {
    console.log(e.clientX, e.clientY);
    createDiv_s(e.clientX, e.clientY);
    lastExecution = now;
  }
});
