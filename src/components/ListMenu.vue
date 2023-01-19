<script setup lang="ts">
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";
import type { ITask } from "../stores/list";

const store = useListStore();
const { list } = storeToRefs(store);
const clearCompleted = () =>
  (list.value = list.value.filter((task: ITask) => task.status !== "done"));
</script>

<template>
  <div class="bottom">
    <span>
      <p>
        {{ list.filter((task: ITask) => task.status === "active").length }}
        items left
      </p>
    </span>
    <span class="bottom__menu">
      <a @click="props.filter = ''">All</a>
      <a @click="props.filter = 'active'">Active</a
      ><a @click="props.filter = 'done'">Completed</a></span
    >
    <span>
      <button @click="clearCompleted">
        <a>Clear Completed</a>
      </button></span
    >
  </div>
</template>

<style scoped>
.bottom {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.bottom__menu a {
  padding: 0 1rem;
}
button {
  all: unset;
  cursor: pointer;
}
</style>
