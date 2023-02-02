<script setup lang="ts">
import { ref, computed } from "vue";
import StatusCheckbox from "./StatusCheckbox.vue";
import { useListStore, type ITask } from "../stores/list";

const listStore = useListStore();

let newTodo = ref<string>("");
let setDone = ref(false);

const addTodo = () => {
  listStore.addTask({
    task: newTodo.value,
    id: Date.now(),
    done: setDone.value,
  });
  newTodo.value = "";
  setDone.value = false;
};
</script>
<template>
  <div class="main__input">
    <form @submit.prevent="addTodo">
      <div class="container">
        <input
          type="text"
          placeholder="Create a new todo..."
          v-model="newTodo"
        />
        <span id="btn" class="btn"> </span>
      </div>
    </form>
  </div>
</template>

<style scoped>
.main_input {
  width: 100%;
}

input {
  all: unset;
  background-color: var(--color-background);
  width: 100%;
  height: 2rem;
  padding-left: 5px;
  border-radius: 5px;
}
.btn {
  position: absolute;
  top: 100px;
  right: 100px;
}
</style>
