<script setup lang="ts"></script>
<template>
  <div>
    <input type="checkbox" id="status" $emit="('completeTask', done)" ; />
  </div>
</template>

<style scoped lang="scss">
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
</style>
