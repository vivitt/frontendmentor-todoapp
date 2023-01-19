<script lang="ts">
interface Props {
  id: number;
  task: string;
  status: string;
}
</script>
<script setup lang="ts">
defineProps<{ props: Props }>();
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
      <div>
        <p>{{ props.task }} - {{ props.status }}</p>
      </div>

      <button><img src="./icons/icon-cross.svg" /></button>
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
}
button {
  all: unset;
  cursor: pointer;
}
</style>
