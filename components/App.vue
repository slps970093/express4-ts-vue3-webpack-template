<template>
  <div class="app">
    <p
        v-text="msg" />
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    return {
      msg: 'Hello World! 猴子',
    };
  },
};
</script>