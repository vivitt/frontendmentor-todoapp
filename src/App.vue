<script setup lang="ts">
import { ref } from "vue";
import Task from "./components/Task.vue";
import { useListStore } from "./stores/list";
import { storeToRefs } from "pinia";
import ListMenu from "./components/ListMenu.vue";
import Attribution from "./components/Attribution.vue";
const store = useListStore();
const { list } = storeToRefs(store);
let newTodo = ref<string>("");

const addTodo = () => {
  store.addTask({
    task: newTodo.value,
    id: Date.now(),
    status: "active",
  });

  newTodo.value = "";
};
</script>

<template>
  <header>
    <div class="header">
      <h1 class="header__title">TODO</h1>
      <div class="header__button">
        <button>swicht mode</button>
      </div>
    </div>
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
        <Task v-for="task in list" :props="task" />
      </ul>
      <div>
        <ListMenu />
      </div>
    </div>
  </main>
  <footer>
    <Attribution />
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
}
</style>
