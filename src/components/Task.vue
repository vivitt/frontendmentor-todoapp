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
    <div class="main__list--task">
      <input type="checkbox" />
      <div>
        <p>{{ props.task }}</p>
        <p>{{ props.status }}</p>
      </div>

      <button><img src="./icons/icon-cross.svg" /></button>
    </div>
  </li>
</template>

<style scoped></style>
