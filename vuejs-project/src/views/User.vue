<template>
  <fragment>
    <h1 class="title">User</h1>
    <user-list />

    <!-- <p v-for="(user, idx) in userIds" :key="idx">
            <router-link :to="`/user/${user}`">
                User {{ user }} 
            </router-link>
    </p>-->
  </fragment>
</template>

<script>
import UserList from "@/components/UserList";

export default {
  data() {
    return {
      userIds: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  components: {
    "user-list": UserList
  }
};
</script>