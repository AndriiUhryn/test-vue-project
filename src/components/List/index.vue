<template>
  <ul v-if="filteredCollection.length">
    <Item
      v-for="item in filteredCollection"
      :key="item.title || item"
      :item="item"
    />
  </ul>
  <div v-else class="errorMessage">
    No results
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'List',
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['cities', 'books'].includes(value);
      }
    },
  },
  components: {
    Item
  },
  computed: {
    filteredCollection(props) {
      // get collection based on the type props
      return this.$store.getters[`${props.type}/filteredCollection`];
    },
  },
};
</script>

<style scoped>
ul {
  padding: unset;
  list-style: none;
}

ul li {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
</style>
