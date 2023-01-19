<script setup lang="ts">
import { useModeStore } from "../stores/mode";
const modeStore = useModeStore();
const switchMode = () => {
  modeStore.getMode();
  modeStore.mode === "dark"
    ? (modeStore.mode = "light")
    : (modeStore.mode = "dark");
  modeStore.setMode();
};
</script>
<template>
  <div class="header">
    <h1 class="header__title">TODO</h1>
    <div class="header__button">
      <button @click="switchMode">
        <img
          v-if="modeStore.mode === 'dark'"
          src="../components/icons/icon-sun.svg"
        />
        <img v-else src="../components/icons/icon-moon.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: var(--vt-c-white);
}
button {
  all: unset;
  cursor: pointer;
}
</style>
