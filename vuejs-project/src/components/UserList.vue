<template>
  <div>
    <div class="title">User List</div>
    <div class="field">
      <input v-model="filterBy" type="text" class="input" placeholder="filter" style="width: 25em;" />
    </div>
    <p class="button" v-on:click="getUsers()">Get Users</p>
    <hr />
    <!-- <pre>{{ users }}</pre> -->
    <user-list-item v-for="user in filterUsers" :key="user.id" :user="user" />
  </div>
</template>
<script>
import axios from "axios";
import UserListItem from "@/components/UserListItem";
const url = "https://jsonplaceholder.typicode.com/users";
export default {
  mounted() {
    this.getUsers();
  },
  computed: {
    filterUsers() {
      return this.users
        .filter(f => {
          //return f.name.toLowerCase().includes(this.filterBy);
          const regex = new RegExp(this.filterBy, "i");

          return regex.test(f.name);
          //return regex.test(f.name) || regex.test(f.username);
          //return regex.test(JSON.stringify(f));
        })
        .map(m => {
          return {
            id: m.id,
            name: m.name,
            username: m.username
          };
        });
    }
  },
  data() {
    return {
      users: [],
      filterBy: ""
    };
  },
  methods: {
    async getUsers() {
      try {
        const res = await axios.get(url);
        this.users = res.data;
      } catch (e) {
        console.log("err", e.message);
      }
    }
  },
  components: {
    "user-list-item": UserListItem
  }
};
</script>