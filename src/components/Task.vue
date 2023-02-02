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
    color: white;
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

  input[type="checkbox"] {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-width: 20px;
    background: var(--color-background);
    height: 20px;
    width: 20px;
    border: 1px solid var(--color-border);
    color: white;
    border-radius: 17px;
  }

  input[type="checkbox"]:hover {
    border: 1px solid rgba(192, 88, 243, 1);
  }
  input[type="checkbox"]:after {
    content: "✓";
    position: relative;
    left: 20%;
    top: 10%;
    height: 3px;
    width: 5px;
    display: none;
  }

  input[type="checkbox"]:checked:after {
    display: block;
  }
  input[type="checkbox"]:checked {
    border: transparent;
    background: rgba(88, 221, 255, 1);
    background: -webkit-linear-gradient(
      top left,
      rgba(88, 221, 255, 1),
      rgba(192, 88, 243, 1)
    );
    background: -moz-linear-gradient(
      top left,
      rgba(88, 221, 255, 1),
      rgba(192, 88, 243, 1)
    );
    background: linear-gradient(
      to bottom right,
      rgba(88, 221, 255, 1),
      rgba(192, 88, 243, 1)
    );
  }
}
.done {
  color: hsl(233, 14%, 35%);
  text-decoration: line-through;
}
</style>
