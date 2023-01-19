<script setup lang="ts">
import { ref } from "vue";
import Task from "./components/Task.vue";

interface ITask {
  id: number;
  task: string;
  status: string;
}

let newTodo = ref<string>("");
let tasks = ref<ITask[]>([]);
let leftTask = ref<number>(0);
const addTodo = () => {
  tasks.value.push({
    task: newTodo.value,
    id: tasks.value.length + 1,
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
        <Task v-for="task in tasks" :props="task" />
      </ul>
      <div>
        <p>
          {{ tasks.filter((task) => task.status === "active").length }}
          items left
        </p>
        <span><a>All</a><a>Active</a><a>Completed</a></span>
        <a>Clear Completed</a>
      </div>
    </div>
  </main>
  <footer>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
  </footer>
</template>

<style scoped></style>
