import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface ITask {
  id: number;
  task: string;
  done: boolean;
}
export interface IFilter {
  filter: string;
}

export const useListStore = defineStore("list", () => {
  let list = ref<ITask[]>([]);
  const filteredTasks = ref<ITask[]>([...list.value]);
  const selectedTaskStatus = ref<string>("All");

  const addTask = (task: ITask) => {
    list.value.push(task);
    filteredTasks.value = filterTasks(selectedTaskStatus.value);
  };

  const removeTask = (task: ITask) => {
    list.value = list.value.filter((t) => t.id !== task.id);
    filteredTasks.value = filterTasks(selectedTaskStatus.value);
  };

  const filterTasks = (f: string): ITask[] => {
    selectedTaskStatus.value = f;
    if (f === "Active") {
      return list.value.filter((task) => task.done === false);
    } else if (f === "Completed") {
      return list.value.filter((task) => task.done === true);
    }
    return list.value;
  };

  return {
    list,
    addTask,
    removeTask,
    filteredTasks,
    filterTasks,
    selectedTaskStatus,
  };
});
