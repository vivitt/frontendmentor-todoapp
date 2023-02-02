<script setup lang="ts">
import { useModeStore } from "../stores/mode";
const modeStore = useModeStore();
const switchMode = () => {
  modeStore.mode === "dark"
    ? (modeStore.mode = "light")
    : (modeStore.mode = "dark");
  modeStore.setMode(modeStore.mode);
  modeStore.getMode(modeStore.mode);
};
</script>
<template>
  <div class="header">
    <h1 class="header__title">TODO</h1>
    <div class="header__button">
      <button @click="switchMode">
        <img
          width="17"
          v-if="modeStore.mode === 'dark'"
          src="../components/icons/icon-sun.svg"
        />
        <img width="17" v-else src="../components/icons/icon-moon.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: var(--vt-c-white);
  &__title {
    font-size: 1.3rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.2rem;
  }
}
button {
  all: unset;
  cursor: pointer;
}
</style>
