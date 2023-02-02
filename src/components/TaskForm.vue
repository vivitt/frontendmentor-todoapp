<script setup lang="ts">
import { ref, computed } from "vue";

import { useListStore, type ITask } from "../stores/list";

const listStore = useListStore();

let newTodo = ref<string>("");
let setDone = ref(false);

const addTodo = () => {
  if (newTodo.value !== "") {
    listStore.addTask({
      task: newTodo.value,
      id: Date.now(),
      done: setDone.value,
    });
    newTodo.value = "";
    setDone.value = false;
  }
};
</script>
<template>
  <div class="main__input">
    <form @submit.prevent="addTodo">
      <div class="container">
        <span class="checkbox">
          <input
            type="checkbox"
            id="status"
            v-model="setDone"
            aria-label="task-status"
          />
        </span>
        <span class="textinput">
          <input
            type="text"
            placeholder="Create a new todo..."
            v-model="newTodo"
          />
        </span>
        <span id="btn" class="btn"> </span>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.main__input {
  width: 100%;
  .container {
    position: relative;
    .checkbox {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .textinput input {
      all: unset;
      background-color: var(--color-list-background);
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      padding-left: 50px;
      height: 3rem;
      color: var(--color-task);
      border-radius: 5px;
    }
  }
}

.btn {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
