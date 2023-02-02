import { ref } from "vue";
import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", () => {
  let mode = ref<string>("dark" || "ligth");

  const setMode = () => {
    localStorage.setItem("mode", mode.value);
  };
  const getMode = () => {
    let selectedMode = localStorage.getItem("mode");
    selectedMode === "dark" || selectedMode === ""
      ? document.documentElement.setAttribute("class", "dark")
      : document.documentElement.setAttribute("class", "");
    console.log(mode.value);
  };

  return { mode, setMode, getMode };
});
