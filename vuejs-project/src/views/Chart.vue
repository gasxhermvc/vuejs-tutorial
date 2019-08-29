<template>
  <fragment>
    <div class="title">Chart</div>
    <div>
      <button v-on:click="type = t" v-for="t in types" :key="t" :class="isActive(t)">{{ t }}</button>
      <apex-charts :type="type" :series="series" :options="options" />
    </div>
  </fragment>
</template>
<script>
import ApexCharts from "vue-apexcharts";

//=>Global
//Vue.component("apex-charts", ApexCharts);

export default {
  methods: {
    isActive(type) {
      return this.type === type ? "button is-primary" : "button";
    }
  },
  computed: {
    types() {
      return ["line", "bar", "histogram", "area", "scatter", "heatmap"];
    },
    series() {
      return [
        {
          name: "2019",
          data: [3, 5, 1, 7, 3]
        },
        {
          name: "2018",
          data: [5, 2, 9, 7, 4]
        }
      ];
    },
    options() {
      return {
        xaxis: {
          categories: ["Apple", "Orange", "Lemon", "Mango", "Cherry"]
        }
      };
    }
  },
  data() {
    return {
      type: "line"
    };
  },
  components: {
    "apex-charts": ApexCharts
  }
};
</script>