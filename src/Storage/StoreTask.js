export function StoreTask(task) {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  data.push(task);
  const JsonData = JSON.stringify(data);
  localStorage.setItem("tasks", JsonData);

  console.log("added", data, JsonData);
}
export function DeleteTask(id) {
  const Data = AccessTask();
  let newData = (Data.filter((task) => task.id !== id));
  newData = JSON.stringify(newData)
// console.log(newData,'new Data',Data)
  localStorage.setItem("tasks", newData);
}

export function AccessTask() {
  let data = localStorage.getItem("tasks");
  if (data) {
    localStorage.getItem("tasks");
    return JSON.parse(data);
  } else {
    return [];
  }
}
