<template>
  <div>
    <h1 class="title">About</h1>
    <ajax-getter v-slot="slotProps" :url="'https://jsonplaceholder.typicode.com/users'">
      <template v-if="slotProps.errorMessage === ''">
        <user-list-item v-for="user in slotProps.items" :key="user.id" :user="user" />
      </template>
      <template v-else>
        <p class="help is-danger">{{ slotProps.errorMessage }}</p>
      </template>
    </ajax-getter>
  </div>
</template>

<script>
import AjaxGetter from "@/components/AjaxGetter";
import UserListItem from "@/components/UserListItem";

export default {
  data() {
    return {};
  },
  components: {
    "ajax-getter": AjaxGetter,
    "user-list-item": UserListItem
  }
};
</script>