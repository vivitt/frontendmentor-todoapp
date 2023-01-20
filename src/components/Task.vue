<script lang="ts">
interface Props {
  id: number;
  task: string;
  done: boolean;
}
</script>
<script setup lang="ts">
import { useListStore } from "../stores/list";
const store = useListStore();

defineProps<{ props: Props }>();

const remove = (task: Props) => store.removeTask(task);
</script>
<template>
  <li key="props.id">
    <div class="task">
      <input type="checkbox" id="status" v-model="props.done" />

      <label for="status" hidden> </label>

      <div :class="props.done === false ? '' : 'done'">
        <p>{{ props.task }} - {{ props.done }} {{ props.id }}</p>
      </div>

      <button @click="remove(props)">
        <img src="./icons/icon-cross.svg" />
      </button>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
.task {
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-around;
  align-items: center;
  color: white;
}
.done {
  color: hsl(233, 14%, 35%);
  text-decoration: line-through;
}
button {
  all: unset;
  cursor: pointer;
}
</style>
