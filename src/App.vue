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
        <ul v-if="filteredTasks.length > 0">
          <Task v-for="task in filteredTasks" :props="task" />
        </ul>
        <div v-else class="empty-list">
          <p
            v-if="
              filterTaskStatus === 'Completed' || filterTaskStatus === 'Active'
            "
          >
            There are not {{ filterTaskStatus.toLowerCase() }} tasks
          </p>
          <p v-else>Your todo is empty</p>
        </div>
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

<style lang="scss">
.app {
  max-width: 85%;
  margin: auto;
  min-width: 200px;
  main {
    margin: 0 0 25rem 0;
    .main__list {
      background-color: var(--color-list-background);

      border-radius: 5px;

      margin-top: 1rem;
      ul {
        width: 100%;
        padding: 0;
        margin: 0;
      }
      .empty-list {
        color: var(--color-task);
        border-bottom: 0.8px solid var(--color-completed-task);
        text-align: center;
        padding-top: 0.2rem;
      }
    }
  }
  footer {
    color: var(--color-completed-task);
    text-align: center;
  }
}
</style>
