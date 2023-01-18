<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

interface ITask {
  task: string;
  status: string;
}
</script>

<template>
  <header>
    <div class="header">
      <h1 class="header__title">TODO</h1>
      <div class="header__button">
        <button>swicht mode</button>
      </div>
    </div>
  </header>
  <main>
    <div class="main__input">
      <input type="text" />
    </div>
    <div class="main__list">
      <ul>
        <li>
          <div class="main__list--task">
            <input type="checkbox" />
            <p>task</p>
            <button>X</button>
          </div>
        </li>
      </ul>
      <div>
        <p>5 items left</p>
        <span><a>All</a><a>Active</a><a>Completed</a></span>
        <a>Clear Completed</a>
      </div>
    </div>
  </main>
  <footer>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
  </footer>
</template>

<style scoped></style>
