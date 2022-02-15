<template>
  <div class="wrapper">
    <SearchBlock
      autofocus
      type="cities"
      title="Search cities"
    />
    <SearchBlock
      type="books"
      title="Search books"
    />
  </div>
</template>

<script>
import SearchBlock from './components/SearchBlock.vue';

export default {
  name: 'App',
  components: {
    SearchBlock,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  color: white;
  height: 100vh;
  display: flex;
  background: black;
  flex-direction: row;
  justify-content: space-around;
}
</style>
