<template>
  <div>
    <input type="checkbox" name="name" v-on:click="toggleActive(info.id)" >
    <label for="name">{{ info.name }}</label><br>
  </div>

</template>

<script>

  export default {
    name: "Toggle",
    props: {
        info: Object,
    },
    inject: ["toggleActive"]
  }

</script>
