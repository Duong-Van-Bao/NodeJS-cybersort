const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json"); // hex
  // chuyển sang chuỗi
  const taskString = buffer.toString();
  // chuyển sang kiểu JSON
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

const createTask = (title, description) => {
  const newTask = {
    id: Math.random().toString(),
    title,
    description,
  };
  let taskList = readAllTask();
  taskList = [...taskList, newTask];
  fs.writeFileSync("task.json", JSON.stringify(taskList));
  return newTask;
};

module.exports = {
  readAllTask,
  createTask,
};
