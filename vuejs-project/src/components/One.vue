<template>
  <fragment>
    <div class="box">
      <div class="title">One</div>
      {{ counter }} , {{ doubleCounter }}
      <button class="button is-danger" v-on:click="resetEmit()">Reset</button>
      <two :counter="counter" />
    </div>
  </fragment>
</template>

<script>
import Two from "@/components/Two";

export default {
  methods: {
    resetEmit(){
      console.log('OK');
      this.$emit('resetCounter');
    }
  },
  components: {
    two: Two
  },
  props: {
    counter: {
      required: true,
      type: Number
    },
    doubleCounter: {
      default: 10,
      type: Number
    }
  }
};
</script>