import { ref } from "vue";
import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", () => {
  let mode = ref<string>("dark" || "ligth");

  const setMode = () => {
    localStorage.setItem("mode", mode.value);
  };
  const getMode = () => {
    mode.value = localStorage.getItem("mode") || "dark";
  };

  return { mode, setMode, getMode };
});
