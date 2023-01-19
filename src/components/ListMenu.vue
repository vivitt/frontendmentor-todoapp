<script setup lang="ts">
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";
import type { ITask } from "../stores/list";
const store = useListStore();
const { list } = storeToRefs(store);
</script>
<template>
  <div>
    <p>
      {{ list.filter((task: ITask) => task.status === "active").length }}
      items left
    </p>
    <a>All</a><a>Active</a><a>Completed</a>
    <a>Clear Completed</a>
  </div>
</template>

<style scoped></style>
