// import yargs, { require } from "yargs"; // ES 6

const yargs = require("yargs"); //es5 (common js)
const fs = require("fs"); //file system (build in nodejs)
const chalk = require("chalk");
const {
  readAllTask,
  createTask,
  readDetaildTask,
  updateTask,
  deleteTask,
} = require("./model/task");

// tạo lệnh test
// node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// CRUD

// create - node app/index.js create --title="Học NodeJS" --description="Học Nodejs không khó lắm"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = createTask(title, description);
    console.log("đã tạo mới công việc thành công : ", newTask);
  },
});
// read-all app/index.js read-all
yargs.command({
  command: "read-all",
  build: {
    list: {
      type: "string",
    },
  },
  handler: () => {
    const result = readAllTask();
    console.log(chalk.blue("taskJson :"), result);
  },
});
//read-detaild app/index.js read-detaild --id="1"
yargs.command({
  command: "read-detaild",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readDetaildTask(id);
    if (task) {
      console.log("task :", task);
    } else {
      console.log("not found!");
    }
  },
});
//update node app/index.js update --id=1 --title="Học Nodejs" --description="Học NodeJS dễ lắm"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const task = updateTask(id, title, description);
    console.log(task);
    debugger;
    if (task) {
      console.log("task update : ", task);
    } else {
      console.log("Not Found!");
    }
  },
});
//delete app/index.js delete
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = deleteTask(id);
    if (task) {
      console.log("delete task : ", task);
    } else {
      console.log("Not Found!");
    }
  },
});

// lưu lại các lệnh vừa tạo
yargs.parse();
