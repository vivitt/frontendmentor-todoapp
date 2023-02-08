<script setup lang="ts">
import { ref } from "vue";
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";
let isActive = ref(0);
const store = useListStore();

const { filteredTasks } = storeToRefs(store);

const filtersForTasksStatus = ["All", "Active", "Completed"];
</script>
<template>
  <div class="mobile-status-menu">
    <ul>
      <li
        v-for="filter in filtersForTasksStatus"
        :key="filtersForTasksStatus.indexOf(filter)"
      >
        <a
          @click="
            filteredTasks = store.filterTasks(filter);
            isActive = filtersForTasksStatus.indexOf(filter);
          "
          :class="{
            active: isActive === filtersForTasksStatus.indexOf(filter),
          }"
          >{{ filter }}</a
        >
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.mobile-status-menu {
  background-color: var(--color-list-background);

  font-size: 0.8rem;
  color: var(--color-menu);
  margin-top: 0.8rem;

  font-weight: 600;
  border-radius: 5px;
  padding: 0.5rem;
  max-width: 100%;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    li {
      list-style-type: none;
      a {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 520px) {
    display: none;
  }
}
</style>
