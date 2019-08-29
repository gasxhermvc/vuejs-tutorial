<template>
  <fragment>
    <div class="title">Search</div>
    <hr />
    <input
      @keyup="handleSearch($event)"
      type="text"
      class="input"
      placeholder="search"
      style="width: 30em;"
    />
    <hr />
    <pre>{{ albums }}</pre>
  </fragment>
</template>

<script>
import _ from "lodash";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/albums";

export default {
  created() {
    //=>ตัวอย่างการใช้ Plugins จากภายนอก
    this.handleSearch = _.debounce(this.handleSearch, 1000);
  },
  data() {
    return {
      albums: [],
      filterBy: ""
    };
  },
  methods: {
    async handleSearch(e) {
      const search = url + `?q=${e.target.value}`;
      console.log("e", search);
      try {
        const { data } = await axios.get(url);
        this.albums = data;
      } catch (e) {
        console.log("err", e.message);
      }
    }
  }
};
</script>