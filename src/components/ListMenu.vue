<script setup lang="ts">
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";
import type { ITask } from "../stores/list";

const store = useListStore();
const { list } = storeToRefs(store);

const clearCompleted = () => {
  list.value = list.value.filter((task: ITask) => !task.done);
};
</script>

<template>
  <div class="bottom">
    <span>
      <p>
        {{ list.filter((task: ITask) => task.done === false).length }}
        items left
      </p>
    </span>
    <span class="bottom__menu">
      <a @click="$emit('filterParam', 'all')">All</a>
      <a @click="$emit('filterParam', 'active')">Active</a
      ><a @click="$emit('filterParam', 'done')">Completed</a></span
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
  font-size: 0.8rem;
}

.bottom__menu a {
  padding: 0 0.5rem;
  cursor: pointer;
}
button {
  all: unset;
  cursor: pointer;
}
</style>
