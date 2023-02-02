<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import Task from "./components/Task.vue";
import { useListStore, type ITask } from "./stores/list";
import ListHeader from "./components/ListHeader.vue";
import { storeToRefs } from "pinia";
import ListMenu from "./components/ListMenu.vue";
import Attribution from "./components/Attribution.vue";
import TaskForm from "./components/TaskForm.vue";
import MobileTaskStatusMenu from "./components/MobileTaskStatusMenu.vue";

const listStore = useListStore();

const { list } = storeToRefs(listStore);

let filterTaskStatus = ref<string>("all");

const setFilter = (filter: string) => {
  filterTaskStatus.value = filter;
};

const filteredTasks = computed(() => {
  if (filterTaskStatus.value === "Active") {
    return [...list.value].filter((task) => task.done === false);
  } else if (filterTaskStatus.value === "Completed") {
    return [...list.value].filter((task) => task.done === true);
  }
  return [...list.value].filter((task) => task);
});
</script>

<template>
  <div class="app">
    <header>
      <ListHeader />
    </header>
    <main>
      <TaskForm />

      <div class="main__list">
        <ul>
          <Task v-for="task in filteredTasks" :props="task" />
        </ul>
        <div>
          <ListMenu @filter-tasks="setFilter" />
        </div>
      </div>
      <MobileTaskStatusMenu @filter-tasks="setFilter" />
    </main>
    <footer>
      <Attribution />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app {
  max-width: 85%;
  margin: auto;
  .main__list {
    background-color: var(--color-list-background);

    border-radius: 5px;

    margin-top: 1rem;
    ul {
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
}
</style>
