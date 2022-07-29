const fs = require("fs");

const readAllStask = () => {
  const buffer = fs.readFileSync("task.json"); // hex
  // chuyển sang chuỗi
  const taskString = buffer.toString();
  // chuyển sang kiểu JSON
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

module.exports = {
  readAllStask,
};
