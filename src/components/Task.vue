<script lang="ts">
interface Props {
  id: number;
  task: string;
  status: string;
}
</script>
<script setup lang="ts">
import type { Store } from "pinia";
import { useListStore } from "../stores/list";
const store = useListStore();
defineProps<{ props: Props }>();
const remove = (task: Props) => store.removeTask(task);
</script>
<template>
  <li key="props.id">
    <div class="task">
      <label class="checkbox__container">
        <input
          type="checkbox"
          @change="
            props.status === 'active'
              ? (props.status = 'done')
              : (props.status = 'active')
          "
        />
        <span class="checkmark"></span>
      </label>
      <div :class="props.status === 'active' ? '' : 'done'">
        <p>{{ props.task }} - {{ props.status }} {{ props.id }}</p>
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
