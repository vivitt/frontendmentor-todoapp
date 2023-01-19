<script setup lang="ts">
import { ref, computed } from "vue";
import Task from "./components/Task.vue";
import { useListStore } from "./stores/list";
import ListHeader from "./components/ListHeader.vue";
import { storeToRefs } from "pinia";
import ListMenu from "./components/ListMenu.vue";
import Attribution from "./components/Attribution.vue";

const listStore = useListStore();

const { list } = storeToRefs(listStore);

let filteredTasks = ref(list);
let newTodo = ref<string>("");
let filter = ref<string>("");
const addTodo = () => {
  listStore.addTask({
    task: newTodo.value,
    id: Date.now(),
    status: "active",
  });
  newTodo.value = "";
};

const filterTasks = computed((filter: string) => {
  filter === ""
    ? (filteredTasks.value = list.value)
    : (filteredTasks.value = list.value.filter((t) => {
        t.status === filter;
      }));
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
          <ListMenu />
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
  max-width: 40%;
  margin: auto;
}
footer {
  position: absolute;
  bottom: 0;
}
</style>
