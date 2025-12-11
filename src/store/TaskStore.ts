import { makeAutoObservable } from "mobx";

export type Task = {
  title: string;
  desc: string;
  doFlag: boolean;
};

class TaskStore {
  tasks: Task[] = [
    {
      title: "Посмотреть фильм",
      desc: "'Очень странные дела' давно хотела посмотреть",
      doFlag: false,
    },
    {
      title: "Mobx разобраться",
      desc: "Посмотреть ролики на YT",
      doFlag: false,
    },
    {
      title: "Курс по React",
      desc: "Посмотреть ролики на YT",
      doFlag: false,
    },
  ];

  newTitle: string = "";
  newDesc: string = "";

  setTitle(title: string) {
    this.newTitle = title;
  }
  setDesc(desc: string) {
    this.newDesc = desc;
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTask() {
    if (this.newTitle.trim() && this.newDesc.trim()) {
      this.tasks.push({ title: this.newTitle, desc: this.newDesc, doFlag: false });
      this.newTitle = "";
      this.newDesc = "";
    }
  }

  deleteTask(index: number) {
    // return this.tasks.filter((item, ind) => ind != index);
    this.tasks = this.tasks.filter((item, ind) => ind !== index);
  }
  toggleTask(index: number) {
    return (this.tasks[index].doFlag = !this.tasks[index].doFlag);
  }
}

export const taskStore = new TaskStore();
