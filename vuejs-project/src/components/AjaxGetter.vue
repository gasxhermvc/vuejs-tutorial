<template>
  <div>
    <h1 class="title">Ajax Getter</h1>
    <slot :items="items" :errorMessage="errorMessage"></slot>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    url: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      errorMessage: "",
      items: []
    };
  },
  async mounted() {
    console.log(this.url);
    try{
        const { data } = await axios.get(this.url);
        this.items = data;

    }catch(e){
        this.errorMessage = e.message;
    }
  }
};
</script>