<template>
  <fragment>
    <slot :now="now" />
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      now: new Date()
    };
  },
  mounted() {
    console.log("OK");
    this.intervalRef = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalRef);
  }
};
</script>