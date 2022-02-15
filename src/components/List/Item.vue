<template>
  <li>
    {{ item.title || item }} {{ item.author && `( ${item.author} )` }}
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: [Object, String],
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
