<template>
  <div class="searchWrapper">
    <h2>{{ title }}</h2>
    <Autocomplete :autofocus="autofocus" :type="type" />
    <div v-if="searchValue.length < 3" class="errorMessage">
      Please type something to get some data
    </div>
    <div v-else>
      <List :type="type" />
    </div>
  </div>
</template>

<script>
import List from '@/components/List/index.vue';
import Autocomplete from '@/components/Autocomplete.vue';

export default {
  name: 'SearchBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['cities', 'books'].includes(value);
      }
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    List,
    Autocomplete,
  },
  computed: {
    searchValue(props) {
      // get search based on the type props
      return this.$store.state[props.type]?.search;
    },
  },
};
</script>

<style scoped>
.searchWrapper {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.searchWrapper h2 {
  font-size: 35px;
  margin-bottom: 20px;
}

.searchWrapper .errorMessage {
  color: red;
  margin-top: 10px;
}
</style>
