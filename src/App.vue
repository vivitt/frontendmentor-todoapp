<script setup lang="ts">
import Task from "./components/Task.vue";
import { useListStore } from "./stores/list";
import ListHeader from "./components/ListHeader.vue";
import { storeToRefs } from "pinia";
import ListMenu from "./components/ListMenu.vue";
import Attribution from "./components/Attribution.vue";
import TaskForm from "./components/TaskForm.vue";
import MobileTaskStatusMenu from "./components/MobileTaskStatusMenu.vue";
import draggable from "vuedraggable";
const listStore = useListStore();

const { filteredTasks } = storeToRefs(listStore);
const { selectedTaskStatus } = storeToRefs(listStore);
</script>

<template>
  <div class="app">
    <header>
      <ListHeader />
    </header>
    <main>
      <TaskForm />

      <div class="main__list">
        <draggable
          v-if="filteredTasks.length > 0"
          v-model="filteredTasks"
          tag="ul"
        >
          <template #item="{ element: task }">
            <Task :props="task" />
          </template>
        </draggable>

        <div v-else class="empty-list">
          <p
            v-if="
              selectedTaskStatus === 'Completed' ||
              selectedTaskStatus === 'Active'
            "
          >
            There are not {{ selectedTaskStatus.toLowerCase() }} tasks
          </p>
          <p v-else>Your todo is empty</p>
        </div>
        <div>
          <ListMenu />
        </div>
      </div>
      <MobileTaskStatusMenu />
      <div class="dragAndDropMssg">
        <p>Drag and drop to reorder list</p>
      </div>
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
  min-width: 300px;
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
    .dragAndDropMssg {
      color: var(--color-menu);
      text-align: center;
      margin-top: 2rem;
    }
  }
  footer {
    color: var(--color-text);
    text-align: center;
  }
}
</style>
