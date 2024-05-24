// To-do List: Tasks Edition

class Tasks {
  constructor(name) {
    this.name = name;
  }
}

class Menu {
  constructor() {
    this.tasks = [];
  }

// I chose to use a switch statement because it allows for multiple different code blocks to be executed based on the value of the variable.

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTask();
          break;
        case "2":
          this.viewTasks();
          break;
        case "3":
          this.deleteATask();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) Create new task
        2) View task
        3) delete task
        `);
  }

  viewTasks() {
    let taskString = "";
    for (let i = 0; i < this.tasks.length; i++) {
      taskString += i + ") " + this.tasks[i].name + "\n";
    }
    alert(taskString);
  }

  createTask() {
    let name = prompt("Enter a task: ");
    this.tasks.push(new Tasks(name));
  }

  deleteATask() {
    let taskString = "";
    for (let i = 0; i < this.tasks.length; i++) {
      taskString += i + ") " + this.tasks[i].name + "\n";
    }
    let selectedTask = prompt(`Select a task to delete by index:
${taskString}`);
    if (selectedTask > -1 && selectedTask < this.tasks.length) {
      this.tasks.splice(selectedTask, 1);
    }
  }
}
  let menu = new Menu();
  menu.start()


