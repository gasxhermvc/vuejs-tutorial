<template>
  <div>
    <div class="title">User List Item</div>
    <pre>{{ user }}</pre>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    user: {
      required: true,
      type: Object
    }
  }
};
</script>