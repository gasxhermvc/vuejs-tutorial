<template>
  <fragment>
    <div class="box">
      <div class="title">Nested {{ counter }}</div>
      <timer v-slot="slotProps">
        <p>Timer : {{ slotProps.now }}</p>
      </timer>
      <container>
        <template v-slot:header>
          <h1 class="title">Nested Component</h1>
        </template>
        <template v-slot:content>
          <pre>
          {{ counter }}
        </pre>
        </template>
        <template v-slot:footer>
          <div class="footer">Footer</div>
        </template>
      </container>
      <button v-on:click="counter += 1" class="button">Update</button>
      <button v-on:click="resetCounter()" class="button">Reset</button>
      <one @resetCounter="resetCounter" :counter="counter" :doubleCounter="counter * 2" />
    </div>
  </fragment>
</template>

<script>
import One from "@/components/One";
import Container from "@/components/Container";
import Timer from "@/components/Timer";

export default {
  methods: {
    resetCounter() {
      this.counter = 1;
    }
  },
  data() {
    return {
      counter: 1
    };
  },
  components: {
    one: One,
    container: Container,
    timer: Timer
  }
};
</script>