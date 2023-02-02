<script setup lang="ts">
import { ref } from "vue";
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";
import type { ITask } from "../stores/list";

const store = useListStore();
const { list } = storeToRefs(store);
let isActive = ref(0);
const clearCompleted = () => {
  list.value = list.value.filter((task: ITask) => !task.done);
};

const filtersForTasksStatus = ["All", "Active", "Completed"];
</script>

<template>
  <div class="bottom">
    <span class="items-lefts">
      <p>
        {{ list.filter((task: ITask) => task.done === false).length }}
        items left
      </p>
    </span>
    <span class="bottom__menu">
      <ul>
        <li
          v-for="filter in filtersForTasksStatus"
          :key="filtersForTasksStatus.indexOf(filter)"
        >
          <a
            @click="
              $emit('filterTasks', filter);
              isActive = filtersForTasksStatus.indexOf(filter);
            "
            :class="{
              active: isActive === filtersForTasksStatus.indexOf(filter),
            }"
            >{{ filter }}</a
          >
        </li>
      </ul>
    </span>
    <span class="clear-completed">
      <button @click="clearCompleted">
        <a>Clear Completed</a>
      </button></span
    >
  </div>
</template>

<style scoped lang="scss">
.bottom {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--color-menu);
  padding: 0 1rem;
  font-weight: 500;

  max-width: 100%;

  &__menu {
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        list-style-type: none;
        a {
          padding: 0 0.5rem;
          cursor: pointer;
        }
      }
    }
    @media (max-width: 499px) {
      display: none;
    }
  }
  button {
    all: unset;
    cursor: pointer;
  }
}
</style>
