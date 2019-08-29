<template>
  <fragment>
    <div>
      <h1 class="title">Pagination</h1>
      <hr />
      <pre>{{ albumTitles }}</pre>
      <nav class="pagination">
        <ul class="pagination-list">
          <li v-for="page in totalPage" :key="page">
            <!-- <router-link
              :to="`/pagination?_limit=${totalRecord}&_page=${page}`"
              v-on:click="getAlbums(page)"
              :class="IsCurrentPage(page)"
            >{{ page }}</router-link>-->
            <a
              href="Javascript:void(0)"
              v-on:click="getAlbums(page)"
              :class="IsCurrentPage(page)"
              v-if="currentPage !== page"
            >{{ page }}</a>
            <a href="Javascript:void(0)" :class="IsCurrentPage(page)" v-else>{{ page }}</a>
          </li>
        </ul>
      </nav>
      <p v-for="(album,idx) in albumTitles" :key="idx">{{ idx + initialIdx }} {{ album }}</p>
    </div>
  </fragment>
</template>
<script>
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/albums";

const recordPerPage = 5;

export default {
  data() {
    return {
      albums: [],
      totalRecord: 0,
      totalPage: "0",
      currentPage: 1
    };
  },
  methods: {
    async getAlbums(pageNo) {
      try {
        const { data, headers } = await axios.get(
          `${url}?_limit=${recordPerPage}&_page=${pageNo}`
        );
        this.albums = data;
        this.totalRecord = data.length;
        this.totalPage = Math.ceil(
          parseInt(headers["x-total-count"]) / recordPerPage
        );
        this.currentPage = pageNo;
      } catch (e) {
        console.log("err", e.message);
      }
    },
    IsCurrentPage(pageNo) {
      return this.currentPage == pageNo
        ? "pagination-link is-current"
        : "pagination-link";
    }
  },
  computed: {
    albumTitles() {
      return this.albums.map(({ title }) => title);
    },
    initialIdx() {
      return this.totalRecord * (this.currentPage - 1) + 1;
    }
  },
  mounted() {
    this.getAlbums(this.$route.query._page);
  }
};
</script>