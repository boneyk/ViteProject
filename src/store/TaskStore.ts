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

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title: string, desc: string) {
    return this.tasks.push({ title, desc, doFlag: false });
  }

  deleteTask(index: number) {
    return this.tasks.filter((item, ind) => ind != index);
  }
  toggleTask(index: number) {
    return (this.tasks[index].doFlag = !this.tasks[index].doFlag);
  }
}

export const taskStore = new TaskStore();
