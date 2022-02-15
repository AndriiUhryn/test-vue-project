<template>
  <input type="text" @input="handleChange" :autofocus="autofocus" />
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
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
  methods: {
    handleChange(e) {
      // set search value based on the type props
      this.$store.commit(`${this.type}/setSearchInput`, {value: e.target.value});
    },
  },
};
</script>

<style scoped>
input {
  width: 200px;
  padding: 5px 10px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.5);
  font-weight: bold;
}
</style>
