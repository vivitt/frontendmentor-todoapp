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
      <div class="task-group">
        <input
          type="checkbox"
          id="status"
          v-model="props.done"
          aria-label="task-status"
        />

        <div :class="{ done: props.done }">
          <p>{{ props.task }}</p>
        </div>
      </div>

      <button @click="remove(props)">
        <img src="./icons/icon-cross.svg" />
      </button>
    </div>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  width: 100%;

  .task {
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: var(--color-task);
    border-bottom: 0.8px solid var(--color-completed-task);
    padding: 1rem 1rem 0.5rem 0;
    .task-group {
      padding: 0;
      margin: 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      justify-content: center;

      p,
      input {
        padding: 0;
        margin: 0 1rem;
      }
    }
  }

  button {
    all: unset;
    cursor: pointer;
  }
}
.done {
  color: hsl(233, 14%, 35%);
  text-decoration: line-through;
}
</style>
