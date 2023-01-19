import { ref } from "vue";
import { defineStore } from "pinia";

export interface ITask {
  id: number;
  task: string;
  status: string;
}
export const useListStore = defineStore("list", () => {
  let list = ref<ITask[]>([]);

  const addTask = (task: ITask) => {
    list.value.push(task);
  };

  const removeTask = (task: ITask) => {
    list.value = list.value.filter((t) => t.id !== task.id);
  };

  return { list, addTask, removeTask };
});
