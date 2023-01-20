<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import Task from "./components/Task.vue";
import { useListStore, type ITask } from "./stores/list";
import ListHeader from "./components/ListHeader.vue";
import { storeToRefs } from "pinia";
import ListMenu from "./components/ListMenu.vue";
import Attribution from "./components/Attribution.vue";
import type { IFilter } from "./stores/list";
const listStore = useListStore();

const { list } = storeToRefs(listStore);

let newTodo = ref<string>("");

let filterParam = reactive<IFilter>({ filter: "all" });

const addTodo = () => {
  listStore.addTask({
    task: newTodo.value,
    id: Date.now(),
    done: false,
  });
  newTodo.value = "";
};

const filteredTasks = computed((filter: string) => {
  console.log(filter);
  if (filter === "active") {
    return [...list.value].filter((task) => task.done === false);
  } else if (filter === "done") {
    return [...list.value].filter((task) => task.done === true);
  } else {
    return [...list.value].filter((task) => task);
  }
});
</script>

<template>
  <div class="app">
    <header>
      <ListHeader />
    </header>
    <main>
      <div class="main__input">
        <form @submit.prevent="addTodo">
          <input
            type="text"
            placeholder="Create a new todo..."
            v-model="newTodo"
          />
        </form>
      </div>
      <div class="main__list">
        <ul>
          <Task v-for="task in filteredTasks" :props="task" />
        </ul>
        <div>
          <ListMenu @filterParam="" />
        </div>
      </div>
    </main>
    <footer>
      <Attribution />
    </footer>
  </div>
</template>

<style scoped>
.app {
  max-width: 60%;
  margin: auto;
}
footer {
  position: absolute;
  bottom: 0;
}
</style>
