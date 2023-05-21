const tasks = document.querySelector(".tasks"),
  form = document.querySelector(".newtask"),
  inp = document.querySelector(".inp"),
  btn = document.querySelector(".push");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inp.value.length === 0) {
    alert("Write to do");
  } else {
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
    <span class="taskname">${inp.value}</span>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
    `;
    tasks.appendChild(task);
    inp.value = "";

    const del = document.querySelector(".delete");

    del.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
});
